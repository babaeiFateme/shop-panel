import { BASE_URL, Http } from '@core/services/fetch-api'

const deleteUserHttp = async (id) => {
    try {
        const response = await Http.delete(`${BASE_URL}/users/${id}`)
        console.log(response)
        return response
    } catch (error) {
        return error.message
    }
}
export { deleteUserHttp }
