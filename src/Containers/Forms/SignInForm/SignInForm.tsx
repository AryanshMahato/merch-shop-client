import React from "react";
import { Formik, Field, Form } from "formik";
import { LoginButton } from "../../../Global/Button/Buttons";
import signInSchema from "../../../Schema/signInSchema";
import { TextField } from "formik-material-ui";
import { ISignInValues } from "../../../../types/Forms";
import styles from "./SignInForm.styles";

const SignInForm = ({ formSubmit }: FormProps) => {
  const classes = styles();

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
        <Form className={classes.root}>
          <Field
            name={"email"}
            component={TextField}
            variant={"outlined"}
            label={"Email"}
            className={classes.field}
          />
          <Field
            name={"password"}
            component={TextField}
            variant={"outlined"}
            label={"Password"}
            type={"password"}
            className={classes.field}
          />
          <LoginButton className={classes.button} />
        </Form>
      )}
    </Formik>
  );
};

interface FormProps {
  formSubmit: (values: ISignInValues) => void;
}

export default SignInForm;
