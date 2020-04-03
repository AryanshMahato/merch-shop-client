import React from "react";
import SignInForm from "../Forms/SignInForm/SignInForm";
import { ISignInValues } from "../../../types/Forms";

const SignIn = () => {
  const formSubmitHandler = ({ email, password }: ISignInValues) => {
    console.log(email, password);
  };

  return (
    <div>
      <SignInForm formSubmit={formSubmitHandler} />
    </div>
  );
};

export default SignIn;
