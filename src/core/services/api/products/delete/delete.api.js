import { BASE_URL, Http } from '@core/services/fetch-api'

const deleteHttp = async (id) => {
    try {
        const response = await Http.delete(`${BASE_URL}/products/${id}`)
        console.log(response)
        return response
    } catch (error) {
        return error.message
    }
}
export { deleteHttp }
