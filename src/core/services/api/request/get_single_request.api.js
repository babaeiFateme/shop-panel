/* eslint-disable no-undef */
import { BASE_URL, Http } from '@core/services/fetch-api'

const getSingleRequestHttp = async ({ requestId }) => {
    try {
        const response = await Http.get(`${BASE_URL}/request/${requestId}`)
        if (response.data.success === 'true') {
            return response.data.data
        }
        return Promise.reject(response.data)
    } catch (error) {
        return Promise.reject(error.response)
    }
}

export default getSingleRequestHttp
