import * as yup from 'yup'

const userCreateValidation = yup.object({
    name: yup.string().required('name is required'),
    role: yup.string().required('role is required'),
    email: yup.string().email('plz insert correct formate').required('email is required'),
    password: yup.string().required('password is required'),
})

export { userCreateValidation }
