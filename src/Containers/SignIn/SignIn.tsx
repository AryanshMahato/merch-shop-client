import React from "react";
import SignInForm from "../Forms/SignInForm/SignInForm";
import { ISignInValues } from "../../../types/Forms";
import styles from "./SignIn.styles";
import { connect } from "react-redux";
import { setSignInError, signInUser } from "../../Store/Action/User";
import { Redirect } from "react-router-dom";

const SignIn = ({ signInUser, isAuthenticated }: SignInProps) => {
  const classes = styles();

  const formSubmitHandler = ({ email, password }: ISignInValues) => {
    signInUser(email, password);
  };

  return (
    <div className={classes.root}>
      <SignInForm formSubmit={formSubmitHandler} />
      {isAuthenticated ? <Redirect to={"/"} /> : null}
    </div>
  );
};

interface SignInProps {
  signInUser: (email: string, password: string) => void;
  setSignInError: (error: boolean) => void;
  isAuthenticated: boolean;
}

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.user.authenticated
  };
};

const mapDispatchToProps = { signInUser, setSignInError };

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
