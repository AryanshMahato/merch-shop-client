import * as Yup from "yup";

const signUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name is too short")
    .required(),
  email: Yup.string()
    .email("Invalid Email")
    .required(),
  password: Yup.string()
    .min(5, "Password is too Short")
    .required()
});

export default signUpSchema;
