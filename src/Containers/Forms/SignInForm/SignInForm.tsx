import React from "react";
import { Formik, Form, FormikProps } from "formik";
import { LoginButton } from "../../../Global/Button/Buttons";
import signInSchema from "../../../Schema/signInSchema";
import { ISignInValues } from "../../../../types/Forms";
import styles from "./SignInForm.styles";
import { connect } from "react-redux";
import InputElement from "../../../Components/InputElement/InputElement";

const SignInForm = ({ formSubmit, errors: stateErrors }: FormProps) => {
  const classes = styles();

  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={signInSchema}
      onSubmit={(values, { setSubmitting }) => {
        formSubmit(values);
        setSubmitting(false);
      }}
    >
      {(props: FormikProps<ISignInValues>) => {
        // Checks if validation error or server errors are not same,
        // Checks if validation and password error is not there
        if (
          props.errors.email !== stateErrors.email &&
          props.errors.password !== stateErrors.password &&
          !props.errors.password &&
          !props.errors.email
        ) {
          props.setErrors(stateErrors);
        }

        return (
          <Form className={classes.root}>
            <InputElement
              name={"email"}
              label={"Email"}
              className={classes.field}
            />
            <InputElement
              name={"password"}
              label={"Password"}
              type={"password"}
              className={classes.field}
            />
            <LoginButton className={classes.button} />
          </Form>
        );
      }}
    </Formik>
  );
};

interface FormProps {
  formSubmit: (values: ISignInValues) => void;
  errors: any;
}

const mapStateToProps = (state: any) => {
  return {
    errors: state.user.signInError
  };
};

export default connect(mapStateToProps)(SignInForm);
