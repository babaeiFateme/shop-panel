const { Http, BASE_URL } = require('@core/services/fetch-api')

const editProductHttp = async ({ id, data }) => {
    console.log(data)
    try {
        const response = await Http.put(`${BASE_URL}/products/${id}`, data)
        console.log(response)
        return response
    } catch (error) {
        console.log(error)
    }
}

export default editProductHttp
