const { Http, BASE_URL } = require('@core/services/fetch-api')

const editCategoryHttp = async ({ id, data }) => {
    try {
        const response = await Http.put(`${BASE_URL}/categories/${id}`, data)
        console.log(response)
        return response
    } catch (error) {
        console.log(error)
    }
}

export default editCategoryHttp
