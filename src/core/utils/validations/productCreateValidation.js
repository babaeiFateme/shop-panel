import * as yup from "yup";

const productCreateValidation = yup.object({
    title: yup.string().required("title is required"),
    description: yup.string().required("description is required"),
    price: yup.string().required("price is required"),
    GategoryId: yup.string().required("category is required"),
});

export { productCreateValidation };
