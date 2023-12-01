import { BASE_URL, Http } from '@core/services/fetch-api'
const categoryHttp = async () => {
    try {
        const response = await Http.get(`${BASE_URL}/users/categories`)
        return response.data
    } catch (error) {
        return error.response
    }
}
export default categoryHttp
