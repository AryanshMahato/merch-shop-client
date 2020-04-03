import React from "react";
import SignInForm from "../Forms/SignInForm/SignInForm";

const SignIn = () => {
  const formSubmitHandler = () => {};

  return (
    <div>
      <SignInForm formSubmit={formSubmitHandler} />
    </div>
  );
};

export default SignIn;
