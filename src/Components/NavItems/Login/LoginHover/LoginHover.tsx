import React, { useState } from "react";
import styles from "./LoginHover.styles";
import { Divider } from "@material-ui/core";
import { Link } from "react-router-dom";

interface LoginHoverProps {
  Hide: boolean;
}

//? Main Function
const LoginHover = ({ Hide }: LoginHoverProps) => {
  const classes = styles();
  const [showState, setShowState] = useState(false);

  const mouseEnter = () => {
    setShowState(true);
  };

  const mouseLeave = () => {
    setShowState(false);
  };

  let showClass = Hide ? classes.hide : null;
  if (showState) {
    showClass = null;
  }

  //? JSX Return
  return (
    <div
      className={classes.loginHover + " " + showClass}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <div className={classes.triangle} />
      <div className={classes.outerBox}>
        <Link to={"/log-in"} className={classes.login}>
          Login
        </Link>
        <Divider orientation="vertical" flexItem className={classes.divider} />
        <Link to={"/sign-up"} className={classes.signUp}>
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LoginHover;
