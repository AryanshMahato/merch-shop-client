import React from "react";
import { Formik, Form, FormikProps } from "formik";
import { SignUpButton } from "../../../Global/Button/Buttons";
import { ISignUpValues } from "../../../../types/Forms";
import styles from "./SignUpForm.styles";
import { connect } from "react-redux";
import InputElement from "../../../Components/InputElement/InputElement";
import signUpSchema from "../../../Schema/signUpSchema";

const SignUpForm = ({ formSubmit, errors: stateErrors }: FormProps) => {
  const classes = styles();

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: ""
      }}
      validationSchema={signUpSchema}
      onSubmit={(values, { setSubmitting }) => {
        formSubmit(values);
        setSubmitting(false);
      }}
    >
      {(props: FormikProps<ISignUpValues>) => {
        // Checks if validation error or server errors are not same,
        // Checks if validation and password error is not there
        if (
          props.errors.email !== stateErrors.email &&
          props.errors.password !== stateErrors.password &&
          props.errors.name !== stateErrors.name &&
          !props.errors.password &&
          !props.errors.name &&
          !props.errors.email
        ) {
          props.setErrors(stateErrors);
        }

        return (
          <Form className={classes.root}>
            <InputElement
              name={"name"}
              label={"Name"}
              className={classes.field}
            />
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
            <SignUpButton className={classes.button} />
          </Form>
        );
      }}
    </Formik>
  );
};

interface FormProps {
  formSubmit: (values: ISignUpValues) => void;
  errors: any;
}

const mapStateToProps = (state: any) => {
  return {
    errors: state.user.signInError
  };
};

export default connect(mapStateToProps)(SignUpForm);
