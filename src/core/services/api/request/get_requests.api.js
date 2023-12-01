/* eslint-disable no-undef */
import { BASE_URL, Http } from '@core/services/fetch-api'

const getRequestHttp = async (filter = '') => {
    try {
        const response = await Http.get(`${BASE_URL}/request?orderByColumn=id&orderByDirection=DESC&${filter}`)
        if (response.data.success === 'true') {
            return response.data.data
        }
        return Promise.reject(response.data)
    } catch (error) {
        return Promise.reject(error.response?.data || error)
    }
}

export default getRequestHttp
