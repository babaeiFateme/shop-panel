import { BASE_URL, Http } from '@core/services/fetch-api'
/* eslint-disable no-undef */
const createCategoryHttp = async (data) => {
    try {
        const response = await Http.post(`${BASE_URL}/categories`, data)
        if (response.status == 201) {
            return response
        }
        return Promise.reject(response.data)
    } catch (error) {
        console.log(error)
        return Promise.reject(error.response)
    }
}

export default createCategoryHttp
