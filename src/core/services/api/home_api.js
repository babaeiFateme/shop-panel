import { BASE_URL, Http } from '@core/services/fetch-api'

const getHomePageDataHttp = async () => {
    try {
        const response = await Http.get(`${BASE_URL}/home`)
        if (response.data.success === 'true') {
            return response.data.data
        }
        throw new Error(response.data)
    } catch (error) {
        throw new Error(error.response)
    }
}

export default getHomePageDataHttp
