import React from "react";
import LoginForm from "../Forms/LoginForm/LoginForm";

const SignIn = () => {
  const formSubmitHandler = () => {};

  return (
    <div>
      <LoginForm formSubmit={formSubmitHandler} />
    </div>
  );
};

export default SignIn;
