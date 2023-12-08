import * as yup from 'yup'

const profileValidation = yup.object({
    fname: yup.string().required('plz insert your name'),
    role: yup.string().required('plz insert your role'),
    email: yup.string().email('plz insert correct email.').required('email is required.'),
    password: yup.string().required('password is required'),
})

export { profileValidation }
