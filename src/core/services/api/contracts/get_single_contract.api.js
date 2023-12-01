import { BASE_URL, Http } from '@core/services/fetch-api'

const getSingleContractHttp = async ({ contractId }) => {
    try {
        const response = await Http.get(`${BASE_URL}/contract/${contractId}`)
        if (response.data.success === 'true') {
            return response.data.data
        }
        throw new Error(response.data)
    } catch (error) {
        throw new Error(error.response)
    }
}

export default getSingleContractHttp
