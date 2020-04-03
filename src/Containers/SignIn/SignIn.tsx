import React from "react";
import SignInForm from "../Forms/SignInForm/SignInForm";
import { ISignInValues } from "../../../types/Forms";
import styles from "./SignIn.styles";
import { connect } from "react-redux";
import { signInUser } from "../../Store/Action/User";

const SignIn = ({ signInUser }: SignInProps) => {
  const classes = styles();

  const formSubmitHandler = ({ email, password }: ISignInValues) => {
    signInUser(email, password);
  };

  return (
    <div className={classes.root}>
      <SignInForm formSubmit={formSubmitHandler} />
    </div>
  );
};

interface SignInProps {
  signInUser: (email: string, password: string) => void;
}

const mapDispatchToProps = { signInUser };

export default connect(null, mapDispatchToProps)(SignIn);
