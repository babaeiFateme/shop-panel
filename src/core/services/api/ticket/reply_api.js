import { BASE_URL, Http } from '@core/services/fetch-api'

const replyTicketHttp = async (data, id) => {
    try {
        const response = await Http.post(`${BASE_URL}/ticket/reply/${id}`, data)
        return response
    } catch (error) {
        return error.response
    }
}

export default replyTicketHttp
