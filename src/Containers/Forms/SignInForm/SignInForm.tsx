import React from "react";
import { Formik, Field, Form } from "formik";
import { LoginButton } from "../../../Global/Button/Buttons";
import signInSchema from "../../../Schema/signInSchema";
import { TextField } from "formik-material-ui";
import { ISignInValues } from "../../../../types/Forms";

const SignInForm = ({ formSubmit }: FormProps) => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={signInSchema}
      onSubmit={values => {
        formSubmit(values);
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
  formSubmit: (values: ISignInValues) => void;
}

export default SignInForm;
