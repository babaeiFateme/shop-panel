import * as yup from 'yup'

const categoryEditValidation = yup.object({
    name: yup.string().required('plz name your title'), 
})

export { categoryEditValidation }
