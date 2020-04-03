import React from "react";
import Background from "../Components/Background/Background";
import SignIn from "../Containers/SignIn/SignIn";

const SignInPage = () => {
  return (
    <>
      <Background maxWidth={"800px"}>
        <SignIn />
      </Background>
    </>
  );
};

export default SignInPage;
