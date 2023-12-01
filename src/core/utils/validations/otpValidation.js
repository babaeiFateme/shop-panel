import * as yup from 'yup'

const otpValidation = yup.object({
    otp: yup.number().required('کد فعالسازی الزامی است'),
})

export { otpValidation }
