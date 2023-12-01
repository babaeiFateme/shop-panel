import { BASE_URL, Http } from '@core/services/fetch-api'

const getSingleInvoiceListHttp = async ({ invoiceId }) => {
    try {
        const response = await Http.get(
            `${BASE_URL}/invoice/${invoiceId}?orderByColumn=visited_at&orderByDirection=ASC`
        )
        if (response.data.success === 'true') {
            return response.data.data
        }
        throw new Error(response.data)
    } catch (error) {
        throw new Error(error.response)
    }
}

export default getSingleInvoiceListHttp
