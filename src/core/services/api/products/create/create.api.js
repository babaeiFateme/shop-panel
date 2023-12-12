import { BASE_URL, Http } from "@core/services/fetch-api";
/* eslint-disable no-undef */
const createProductHttp = async (data) => {
    try {
        const response = await Http.post(`${BASE_URL}/products`, data);
        console.log(response);
        if (response.status == 201) {
            return response;
        }
        return Promise.reject(response.data);
    } catch (error) {
        return Promise.reject(error.response);
    }
};

export default createProductHttp;
