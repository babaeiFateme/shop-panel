import * as yup from 'yup'

const ticketValidation = yup.object({
    subject: yup.string().required('عنوان الزامی است'),
    content: yup.string().required('متن الزامی است'),
})

export { ticketValidation }
