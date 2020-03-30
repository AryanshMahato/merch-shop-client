import React from "react";
import styles from "./LoginHover.styles";

const LoginNav = () => {
  const classes = styles();
  return (
    <div
      onMouseEnter={() => {
        console.log("Mose Entered");
      }}
      onMouseLeave={() => {
        console.log("Mose Leave");
      }}
      className={classes.login}
    >
      Login
    </div>
  );
};

export default LoginNav;
