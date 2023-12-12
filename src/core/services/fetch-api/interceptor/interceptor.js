import { toast } from 'react-toastify'
import axios from 'axios'
import { deleteCookie, getCookie } from 'cookies-next'

// - - - imports end - - - - - - - - - -
axios.interceptors.response.use(
    (response) => {
        return response
    },
    async (error) => {
        // check if error is expected from backend
        try {
            if (error.response.status === 500) {
                toast.error('NETWORK-ERROR')
            }

            if (error.response.status === 401 ) {
                deleteCookie('token')
                // do not reload page if getting 401 error for wrong username and password in login
                if (window.location.pathname !== '/') {
                    window.location.href = '/'
                }
            }

            const expectedError = error.response && error.response.status >= 400 && error.response.status <= 500
            // if error doesn't expected when we log it
            if (!expectedError) {
                // get error message from backend (see object of response later... maybe its changed)
                // console.log(error);
            }
        } catch (error) {
            /* empty */
        }
        return Promise.reject(error)
    }
)

// will send token to headers request ( in x-auth-token body )
axios.interceptors.request.use((config) => {
    config.headers.Authorization = 'Bearer ' + getCookie('token')
    return config
})

// renamed to avoid confusion from 'axios'
const axiosInterceptor = axios

export default axiosInterceptor
