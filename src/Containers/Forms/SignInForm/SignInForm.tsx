import React from "react";
import { Formik, Field, Form } from "formik";
import { LoginButton } from "../../../Global/Button/Buttons";
import signInSchema from "../../../Schema/signInSchema";

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
      {({ errors, touched }) => (
        <Form>
          <Field name={"email"} />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <Field name={"password"} />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
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
