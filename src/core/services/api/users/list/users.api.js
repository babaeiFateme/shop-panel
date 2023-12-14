import { BASE_URL, Http } from '@core/services/fetch-api'
const usersHttp = async () => {
    try {
        const response = await Http.get(`${BASE_URL}/users`)
        return response.data
    } catch (error) {
        return error
    }
}
export default usersHttp
