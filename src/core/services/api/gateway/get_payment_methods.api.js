import { BASE_URL, Http } from '@core/services/fetch-api'

const getPaymentMethodHttp = async ({ paymentId }) => {
    try {
        const response = await Http.get(`${BASE_URL}/payment/payment-methods/${paymentId}`)
        if (response.data.success === 'true') {
            return response.data.data
        }
        throw new Error(response.data)
    } catch (error) {
        throw new Error(error.response)
    }
}

export default getPaymentMethodHttp
