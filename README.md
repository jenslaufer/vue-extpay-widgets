# @solytics/vue-extpay-widgets

Vue 3 component library for browser extension monetization via [ExtPay](https://github.com/Glench/ExtPay). Provides a slot-based `<ExtPay>` component and a Vue plugin that manages the ExtPay background service.

## Installation

```bash
npm install @solytics/vue-extpay-widgets
```

Vue 3 is a peer dependency and must be installed separately.

## Setup

### Background script

Register the plugin in your extension's background service worker. The plugin calls `extpay.startBackground()` automatically.

```js
// background.js
import { createApp } from 'vue'
import { ExtPayPlugin } from '@solytics/vue-extpay-widgets'

const app = createApp({})
app.use(ExtPayPlugin, { extensionId: 'your-extension-id' })
```

To defer starting the background listener manually:

```js
app.use(ExtPayPlugin, { extensionId: 'your-extension-id', autoStart: false })

const { inject } = app
const service = inject(SERVICE_KEY)
service.start()
```

### Popup / content script

Register the plugin (without `autoStart`) or use the `<ExtPay>` component directly without the plugin:

```js
// main.js
import { createApp } from 'vue'
import { ExtPayPlugin } from '@solytics/vue-extpay-widgets'
import App from './App.vue'

const app = createApp(App)
app.use(ExtPayPlugin, { extensionId: 'your-extension-id', autoStart: false })
app.mount('#app')
```

## Usage

```vue
<script setup>
import { ExtPay } from '@solytics/vue-extpay-widgets'
</script>

<template>
  <ExtPay extension-id="your-extension-id">
    <template #loading>
      <p>Checking payment status…</p>
    </template>

    <template #paid>
      <p>Thank you! You have full access.</p>
    </template>

    <template #unpaid="{ openPayment, paymentError }">
      <p>Upgrade to unlock all features.</p>
      <p v-if="paymentError" style="color:red">{{ paymentError }}</p>
      <button @click="openPayment">Buy now</button>
    </template>
  </ExtPay>
</template>
```

The component fetches the user's payment status on mount and renders the appropriate slot. While loading, the `#loading` slot is shown. Once resolved, either `#paid` or `#unpaid` is rendered.

## API

### `ExtPayPlugin`

Vue plugin. Install with `app.use()`.

| Option        | Type    | Default | Description                                                   |
|---------------|---------|---------|---------------------------------------------------------------|
| `extensionId` | String  | —       | Your ExtPay extension ID (required)                           |
| `autoStart`   | Boolean | `true`  | Call `extpay.startBackground()` immediately on install        |

The plugin creates a payment service, provides it app-wide under `SERVICE_KEY`, and exposes it as `this.$paymentService`.

### `SERVICE_KEY`

Injection key (`Symbol`) for accessing the payment service via `inject(SERVICE_KEY)`.

```js
import { inject } from 'vue'
import { SERVICE_KEY } from '@solytics/vue-extpay-widgets'

const service = inject(SERVICE_KEY)
service.start()
service.stop()
console.log(service.started) // boolean
```

### `<ExtPay>` component

| Prop           | Type   | Required | Description              |
|----------------|--------|----------|--------------------------|
| `extensionId`  | String | Yes      | Your ExtPay extension ID |

#### Slots

| Slot      | Slot props                                         | Description                                     |
|-----------|----------------------------------------------------|-------------------------------------------------|
| `loading` | —                                                  | Shown while the payment status is being fetched |
| `paid`    | —                                                  | Shown when the user has paid                    |
| `unpaid`  | `openPayment: () => Promise`, `paymentError: String` | Shown when the user has not paid               |

`openPayment` opens the ExtPay payment page. Any error thrown is caught and exposed as `paymentError`.

### `createPaymentService({ extensionId })`

Factory function for the payment service used internally by the plugin. Returns:

| Member    | Type       | Description                         |
|-----------|------------|-------------------------------------|
| `start()` | `Function` | Start the ExtPay background listener |
| `stop()`  | `Function` | Stop the ExtPay background listener  |
| `started` | `Boolean`  | Whether the service is running       |

## Build output

| Format | File                              |
|--------|-----------------------------------|
| ESM    | `dist/vue-extpay-widgets.es.js`   |
| UMD    | `dist/vue-extpay-widgets.umd.cjs` |

`vue` is a peer dependency and is excluded from the bundle.

---

## Architecture (for AI agents)

### Source layout

```text
src/
├── index.js          # Public API: re-exports everything
├── plugin.js         # Vue plugin (ExtPayPlugin + SERVICE_KEY)
├── service.js        # createPaymentService() factory
└── widgets/
    └── ExtPay.vue    # Slot-based payment gate component
```

### Data flow

```text
Background script                    Popup / content script
─────────────────                    ──────────────────────
app.use(ExtPayPlugin, opts)          <ExtPay extension-id="...">
  └─ createPaymentService()            ├─ #loading  (while fetching)
       └─ extpay.startBackground()     ├─ #paid
                                       └─ #unpaid  { openPayment, paymentError }
```

The plugin and the component are **independent** — the component creates its own `ExtPay` instance directly from the `extensionId` prop and does not depend on the plugin being installed.

### Key files

**`src/plugin.js`**

- Exports `ExtPayPlugin` (Vue plugin object) and `SERVICE_KEY` (Symbol injection key).
- `install(app, { extensionId, autoStart = true })`: creates a service, provides it under `SERVICE_KEY`, attaches it as `app.config.globalProperties.$paymentService`, calls `service.start()` unless `autoStart === false`.

**`src/service.js`**

- `createPaymentService({ extensionId })` returns `{ start(), stop(), started }`.
- Guards against double-start with the `started` flag.
- Wraps `extpay.startBackground()` / `extpay.stopBackground()`.

**`src/widgets/ExtPay.vue`**

- Props: `extensionId: String` (required).
- Reactive state: `isLoading`, `hasPaid`, `paymentError`.
- Template uses `v-if` / `v-else-if` / `v-else` to render one of three named slots.
- `openPayment()` calls `extpay.openPaymentPage()`, catches errors into `paymentError`.
- `onMounted`: calls `extpay.getUser()`, sets `hasPaid`, clears `isLoading`.

**`src/index.js`**

- Single entry point. Exports: `ExtPayPlugin`, `SERVICE_KEY`, `ExtPay`, `createPaymentService`.

### Build

- **Tool**: Vite 7 in library mode (`vite build`).
- **Entry**: `src/index.js`.
- **Outputs**: ESM (`dist/vue-extpay-widgets.es.js`) and UMD (`dist/vue-extpay-widgets.umd.cjs`).
- **Externals**: `vue` is excluded from the bundle (peer dependency).
- **Rollup `onwarn`**: `UNUSED_EXTERNAL_IMPORT` warnings are suppressed — false positives from Vue's template compiler generating imports that Rollup's treeshaking flags as unused.

### Conventions

- Components use `<script setup>` with the Composition API.
- No TypeScript — plain JS throughout.
- No test framework is configured yet.
- `extensionId` is always a `String` (ExtPay's identifier, not a numeric ID).
- The `<ExtPay>` component is self-contained and does not rely on the plugin being present.

### Adding a new widget

1. Create `src/widgets/MyWidget.vue` as a `<script setup>` SFC.
2. Export it from `src/index.js`.
3. Document props and slots in this README.
