import * as yup from 'yup'

const registerValidation = yup.object({
    cell_phone: yup.string().required('شماره همراه الزامی است '),
    name: yup.string().required('   نام الزامی است '),
    address: yup.string().required('آدرس الزامی است'),
    province_id: yup.string().required('استان الزامی است'),
    city_id: yup.string().required('   شهر الزامی است '),
    phone: yup.string().required('   شماره ثابت الزامی است '),
    national_code: yup.string().required('   کد ملی الزامی است '),
    user_category_id: yup.string().required('   دسته بندی  الزامی است '),
    company_id: yup.string().required('شرکت الزامی است'),
    location: yup.array().length(2, 'موقعیت مکانی الزامی است ').required('موقعیت مکانی الزامی است '),
    tariff: yup.string().required('تعرفه الزامی است '),
})

export { registerValidation }
