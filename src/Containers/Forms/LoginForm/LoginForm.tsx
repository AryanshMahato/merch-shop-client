import React from "react";
import { useFormik } from "formik";
import { TextField } from "@material-ui/core";
import { LoginButton } from "../../../Global/Button/Buttons";

const LoginForm = ({ formSubmit }: FormProps) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: values => {
      //TODO: Implement onSubmitHandler
      console.log(values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        id={"email"}
        placeholder={"Email"}
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <LoginButton />
    </form>
  );
};

interface FormProps {
  formSubmit: () => void;
}

export default LoginForm;
