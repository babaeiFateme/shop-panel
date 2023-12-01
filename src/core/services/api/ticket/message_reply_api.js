import { BASE_URL, Http } from '@core/services/fetch-api'

const messageReplyTicketHttp = async (id) => {
    try {
        const response = await Http.get(`${BASE_URL}/ticket/${id}`)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}

export default messageReplyTicketHttp
