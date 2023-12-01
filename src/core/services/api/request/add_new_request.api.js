/* eslint-disable no-undef */
import { BASE_URL, Http } from '@core/services/fetch-api'

const addNewRequestHttp = async (data) => {
    try {
        const response = await Http.post(`${BASE_URL}/request/add`, data)

        if (response.data.success === 'true') {
            return response.data.data
        }
        return Promise.reject(response.data)
    } catch (error) {
        return Promise.reject(error.response.data)
    }
}

export default addNewRequestHttp
