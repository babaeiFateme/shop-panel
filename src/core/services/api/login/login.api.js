import { BASE_URL, Http } from "@core/services/fetch-api";
/* eslint-disable no-undef */
const loginHttp = async (data) => {
    try {
        const response = await Http.post(`${BASE_URL}/auth/login`, data);
        console.log(response);
        if (response.status == 201) {
            return response;
        }
        return Promise.reject(response.data);
    } catch (error) {
        return Promise.reject(error.response);
    }
};

export default loginHttp;
