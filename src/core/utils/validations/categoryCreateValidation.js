import * as yup from 'yup'

const categoryCreateValidation = yup.object({
    name: yup.string().required('name is required'),
})

export { categoryCreateValidation }
