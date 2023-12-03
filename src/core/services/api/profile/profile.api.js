import { BASE_URL, Http } from '@core/services/fetch-api'
/* eslint-disable no-undef */

const profileHttp = async (token) => {
    try {
        const response = await Http.get(`${BASE_URL}/auth/profile`, token)
        return response
    } catch (error) {
        return error
    }
}
export default profileHttp
