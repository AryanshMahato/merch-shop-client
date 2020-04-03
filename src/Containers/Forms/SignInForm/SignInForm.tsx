import React from "react";
import { Formik, Field, Form } from "formik";
import { LoginButton } from "../../../Global/Button/Buttons";
import signInSchema from "../../../Schema/signInSchema";
import { TextField } from "formik-material-ui";

const SignInForm = ({ formSubmit }: FormProps) => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={signInSchema}
      onSubmit={values => {
        //TODO: Implement onSubmitHandler
        console.log(values);
      }}
    >
      {() => (
        <Form>
          <Field
            name={"email"}
            component={TextField}
            variant={"outlined"}
            label={"Email"}
          />
          <Field
            name={"password"}
            component={TextField}
            variant={"outlined"}
            label={"Password"}
            type={"password"}
          />
          <LoginButton />
        </Form>
      )}
    </Formik>
  );
};

interface FormProps {
  formSubmit: () => void;
}

export default SignInForm;
