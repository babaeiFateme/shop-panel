import { BASE_URL, Http } from '@core/services/fetch-api'
const companyHttp = async () => {
    try {
        const response = await Http.get(`${BASE_URL}/company`)
        return response
    } catch (error) {
        return error.response
    }
}
export default companyHttp
