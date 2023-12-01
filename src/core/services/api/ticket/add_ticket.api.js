import { BASE_URL, Http } from '@core/services/fetch-api'

const addTicketHttp = async (data) => {
    try {
        const response = await Http.post(`${BASE_URL}/ticket/add`, data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}

export default addTicketHttp
