import React, { useState } from "react";
import styles from "./LoginNav.styles";
import LoginHover from "./LoginHover/LoginHover";
import { Link } from "react-router-dom";

const LoginNav = () => {
  const classes = styles();

  const [hideHover, setHideHover] = useState(true);

  const mouseEnter = () => {
    setHideHover(false);
  };

  const mouseLeave = () => {
    setHideHover(true);
  };

  return (
    <div className={classes.root}>
      <Link
        to={"/log-in"}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className={classes.login}
      >
        Login
      </Link>
      <div className={classes.loginHover}>
        <LoginHover Hide={hideHover} />
      </div>
    </div>
  );
};

export default LoginNav;
