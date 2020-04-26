import React from "react";
import Background from "../../Components/Background/Background";
import styles from "./UnAuthorizedPrompt.styles";
import { NavButton } from "../../Global/Button/Buttons";
import { Link } from "react-router-dom";

const UnAuthorizedPrompt = ({
  className,
  showButton = true,
}: any) => {
  const classes = styles();
  return (
    <Background
      className={classes.root + " " + className}
    >
      <h1 className={classes.annotation}>
        You are UnAuthorized to Visit this Page
      </h1>
      {showButton ? (
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
      ) : null}
    </Background>
  );
};

export default UnAuthorizedPrompt;
