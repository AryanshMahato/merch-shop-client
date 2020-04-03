import React from "react";
import Form from "../../Components/Form/Form";

const SignIn = () => {
  return (
    <div>
      <Form textFields={["email", "password"]} />
    </div>
  );
};

export default SignIn;
