import React from "react";
import Background from "../../Components/Background/Background";
import styles from "./UnAuthorizedPrompt.styles";
import { NavButton } from "../../Global/Button/Buttons";
import { Link } from "react-router-dom";

const UnAuthorizedPrompt = () => {
  const classes = styles();
  return (
    <Background className={classes.root}>
      <h1 className={classes.annotation}>
        You are UnAuthorized to Visit this Page
      </h1>
      <div className={classes.buttons}>
        <Link
          to={"/sign-up"}
          className={classes.signUp}
        >
          <NavButton>Sign Up</NavButton>
        </Link>
        <Link
          to={"/log-in"}
          className={classes.signIn}
        >
          <NavButton>Sign In</NavButton>
        </Link>
      </div>
    </Background>
  );
};

export default UnAuthorizedPrompt;
