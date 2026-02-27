# @solytics/vue-extpay-widgets

Vue 3 components for browser extension payments via [ExtPay](https://extensionpay.com/).

## Install

```bash
npm install @solytics/vue-extpay-widgets
```

Peer dependency: `vue ^3.3`

## Plugin

Register in the background script. Starts the ExtPay background listener automatically.

```js
import { ExtPayPlugin } from '@solytics/vue-extpay-widgets'

app.use(ExtPayPlugin, { extensionId: 'your-extension-id' })
```

Pass `autoStart: false` to start the listener manually via `inject(SERVICE_KEY)`.

## Component

`<ExtPay>` renders one of three slots based on payment status.

```vue
<script setup>
import { ExtPay } from '@solytics/vue-extpay-widgets'
</script>

<template>
  <ExtPay extension-id="your-extension-id">
    <template #loading>Checking…</template>

    <template #paid>
      <!-- user has paid -->
    </template>

    <template #unpaid="{ openPayment, paymentError }">
      <button @click="openPayment">Upgrade</button>
      <p v-if="paymentError">{{ paymentError }}</p>
    </template>
  </ExtPay>
</template>
```

### Props

| Prop            | Type   | Required |
| --------------- | ------ | -------- |
| `extensionId`   | String | yes      |

### Slots

| Slot      | When              | Scope                         |
| --------- | ----------------- | ----------------------------- |
| `loading` | fetching status   | —                             |
| `paid`    | user has paid     | —                             |
| `unpaid`  | user has not paid | `openPayment`, `paymentError` |

`openPayment` opens the ExtPay payment page. Errors surface as `paymentError`.

## Service

Access the payment service via inject or `this.$paymentService`.

```js
import { inject } from 'vue'
import { SERVICE_KEY } from '@solytics/vue-extpay-widgets'

const service = inject(SERVICE_KEY)
service.start()   // starts background listener
service.stop()    // stops background listener
service.started   // boolean
```

The `<ExtPay>` component does not require the plugin — it works standalone via the `extensionId` prop.

## License

MIT
