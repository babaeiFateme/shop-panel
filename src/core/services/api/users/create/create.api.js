import { BASE_URL, Http } from "@core/services/fetch-api";
/* eslint-disable no-undef */
const createUserHttp = async (data) => {
    console.log(data);
    try {
        const response = await Http.post(`${BASE_URL}/users`, data);
        if (response.status == 201) {
            return response;
        }
        return Promise.reject(response.data);
    } catch (error) {
        console.log(error);
        return Promise.reject(error.response);
    }
};

export default createUserHttp;
