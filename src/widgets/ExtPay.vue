<template>
    <slot name="loading" v-if="isLoading" />
    <slot name="paid" v-else-if="hasPaid" />
    <slot name="unpaid" v-else :open-payment="openPayment" :payment-error="paymentError" />
</template>
<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
    extensionId: {
        type: String,
        required: true
    }
})

import ExtPay from 'extpay'

const extpay = ExtPay(props.extensionId)
const hasPaid = ref(false)
const isLoading = ref(true)
const paymentError = ref('')

const openPayment = async () => {
    paymentError.value = ''
    try {
        await extpay.openPaymentPage()
    } catch (e) {
        paymentError.value = e?.message || String(e)
    }
}

onMounted(async () => {
    const user = await extpay.getUser().catch(() => null)
    if (user && user.paidAt) {
        hasPaid.value = true
    }
    isLoading.value = false
})
</script>