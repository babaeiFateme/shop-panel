import { BASE_URL, Http } from '@core/services/fetch-api'

const ticketHttp = async (pageCount) => {
    try {
        const response = await Http.get(`${BASE_URL}/ticket?${pageCount}&orderByColumn=id&orderByDirection=DESC`)

        return response.data
    } catch (error) {
        return error.response
    }
}

export default ticketHttp
