import { BASE_URL, Http } from '@core/services/fetch-api'

const citiesHttp = async (id) => {
    try {
        const response = await Http.get(`${BASE_URL}/users/cities/${id}`)
        return response.data
    } catch (error) {
        return error.response.data
    }
}

export default citiesHttp
