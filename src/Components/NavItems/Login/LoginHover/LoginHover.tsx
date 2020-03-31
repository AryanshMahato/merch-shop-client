import React, { useState } from "react";
import styles from "./LoginHover.styles";
import { Divider } from "@material-ui/core";
import { Link } from "react-router-dom";

interface LoginHoverProps {
  Hide: boolean;
  leftHoverItem: {
    name: string;
    link: string;
  };
  rightHoverItem: {
    name: string;
    link: string;
  };
}

//? Main Function
const LoginHover = ({
  Hide,
  leftHoverItem,
  rightHoverItem
}: LoginHoverProps) => {
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
        <Link to={leftHoverItem.name} className={classes.login}>
          {leftHoverItem.name}
        </Link>
        <Divider orientation="vertical" flexItem className={classes.divider} />
        <Link to={rightHoverItem.link} className={classes.signUp}>
          {rightHoverItem.name}
        </Link>
      </div>
    </div>
  );
};

export default LoginHover;
