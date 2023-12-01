import { BASE_URL, Http } from '@core/services/fetch-api'

const provinceHttp = async () => {
    try {
        const response = await Http.get(`${BASE_URL}/users/provinces`)
        return response.data
    } catch (error) {
        return error.response.data
    }
}

export default provinceHttp
