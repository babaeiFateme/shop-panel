import * as yup from "yup";

const loginValidation = yup.object({
    email: yup
        .string()
        .email("plz insert correct email.")
        .required("email is required."),
    password: yup.string().required("password is required"),
});

export { loginValidation };
