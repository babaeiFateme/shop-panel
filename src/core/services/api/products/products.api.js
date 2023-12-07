import { BASE_URL, Http } from '@core/services/fetch-api'

const productsHttp = async () => {
    try {
        const response = await Http.get(`${BASE_URL}/products`)
        console.log(response)
        if (response.status == 200) {
            console.log(response)
            return response.data
        }
        return Promise.reject(response.data)
    } catch (error) {
        return Promise.reject(error.response)
    }
}
export default productsHttp
