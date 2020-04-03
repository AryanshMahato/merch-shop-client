import React from "react";
import SignInForm from "../Forms/SignInForm/SignInForm";
import { ISignInValues } from "../../../types/Forms";
import styles from "./SignIn.styles";

const SignIn = () => {
  const classes = styles();

  const formSubmitHandler = ({ email, password }: ISignInValues) => {
    console.log(email, password);
  };

  return (
    <div className={classes.root}>
      <SignInForm formSubmit={formSubmitHandler} />
    </div>
  );
};

export default SignIn;
