import React from "react";
import { ISignUpValues } from "../../../types/Forms";
import { connect } from "react-redux";
import { setSignInError, signInUser } from "../../Store/Action/User";
import { Redirect } from "react-router-dom";
import styles from "./SignUp.styles";
import SignUpForm from "../Forms/SignUpForm/SignUpForm";

const SignUp = ({ signInUser, isAuthenticated }: SignUpProps) => {
  const classes = styles();

  const formSubmitHandler = ({ name, email, password }: ISignUpValues) => {
    // signInUser(email, password);
    console.log(name, email, password);
  };

  return (
    <div className={classes.root}>
      <SignUpForm formSubmit={formSubmitHandler} />
      {isAuthenticated ? <Redirect to={"/"} /> : null}
    </div>
  );
};

interface SignUpProps {
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
