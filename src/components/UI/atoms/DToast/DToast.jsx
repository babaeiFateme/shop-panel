import React from 'react'
import { ToastContainer as TContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
const DToast = () => {
    return (
        <TContainer
            position='bottom-right'
            autoClose={5000}
            hide-hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            pauseOnHover
            theme='light'
        />
    )
}
export default DToast
