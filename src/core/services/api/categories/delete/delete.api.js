import { BASE_URL, Http } from '@core/services/fetch-api'

const deleteCategoryHttp = async (id) => {
    try {
        const response = await Http.delete(`${BASE_URL}/categories/${id}`)
        console.log(response)
        return response
    } catch (error) {
        return error.message
    }
}
export { deleteCategoryHttp }
