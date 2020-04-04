import * as Yup from "yup";

const signInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email")
    .required(),
  password: Yup.string()
    .min(5, "Password is too Short")
    .required()
});

export default signInSchema;
