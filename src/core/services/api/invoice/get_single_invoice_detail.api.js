import { BASE_URL, Http } from '@core/services/fetch-api'

const getSingleInvoiceDetailHttp = async ({ invoiceId }) => {
    try {
        const response = await Http.get(`${BASE_URL}/invoice/details/${invoiceId}`)
        if (response.data.success === 'true') {
            return response.data.data
        }
        throw new Error(response.data)
    } catch (error) {
        throw new Error(error.response)
    }
}

export default getSingleInvoiceDetailHttp
