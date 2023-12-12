import * as yup from "yup";

const productCreateValidation = yup.object({
    title: yup.string().required("title is required"),
    description: yup.string().required("description is required"),
    price: yup.string().required("price is required"),
    categoryId: yup.string().required("category is required"),
    // file: yup.string().required("file is required"),
});

export { productCreateValidation };
