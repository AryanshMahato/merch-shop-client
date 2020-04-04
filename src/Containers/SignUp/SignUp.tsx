import React from "react";
import { ISignUpValues } from "../../../types/Forms";
import { connect } from "react-redux";
import { setSignInError, signUpUser } from "../../Store/Action/User";
import { Redirect } from "react-router-dom";
import styles from "./SignUp.styles";
import SignUpForm from "../Forms/SignUpForm/SignUpForm";

const SignUp = ({ signUpUser, isAuthenticated }: SignUpProps) => {
  const classes = styles();

  const formSubmitHandler = ({ name, email, password }: ISignUpValues) => {
    signUpUser(name, email, password);
  };

  return (
    <div className={classes.root}>
      <SignUpForm formSubmit={formSubmitHandler} />
      {isAuthenticated ? <Redirect to={"/"} /> : null}
    </div>
  );
};

interface SignUpProps {
  signUpUser: (name: string, email: string, password: string) => void;
  setSignInError: (error: boolean) => void;
  isAuthenticated: boolean;
}

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.user.authenticated
  };
};

const mapDispatchToProps = { signUpUser, setSignInError };

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
