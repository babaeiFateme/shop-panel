import { BASE_URL, Http } from '@core/services/fetch-api'

const categoriesHttp = async () => {
    try {
        const response = await Http.get(`${BASE_URL}/categories`)
        if (response.status == 200) {
            console.log(response)
            return response.data
        }
    } catch (error) {
        return error.message
    }
}
export default categoriesHttp
