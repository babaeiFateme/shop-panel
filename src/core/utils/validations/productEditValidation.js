import * as yup from 'yup'

const productEditValidation = yup.object({
    title: yup.string().required('plz insert your title'),
    price: yup.string().required('plz insert your price'),
    description: yup.string().required('description is required.'),
    category: yup.string().required('category is required'),
})

export { productEditValidation }
