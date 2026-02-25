import { createPaymentService } from "./service"

const SERVICE_KEY = Symbol("payment-service")

const ExtPayPlugin = {
    install: (app, options = {}) => {
        const service = createPaymentService(options)

        app.provide(SERVICE_KEY, service)
        app.config.globalProperties.$paymentService = service

        if (options.autoStart !== false) {
            service.start()
        }
    }
}

export default ExtPayPlugin
export { SERVICE_KEY }