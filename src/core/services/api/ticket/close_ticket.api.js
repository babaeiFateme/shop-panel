import { BASE_URL, Http } from '@core/services/fetch-api'

const closeTicketHttp = async (id) => {
    try {
        const response = await Http.post(`${BASE_URL}/ticket/close/${id}`)
        return response
    } catch (error) {
        return error.response
    }
}

export default closeTicketHttp
