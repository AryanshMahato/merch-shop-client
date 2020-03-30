import React from "react";
import styles from "./Logo.styles";
import logo from "../../../Assets/Logo.svg";
import { Link } from "react-router-dom";

// Main Class
const Logo = () => {
  const classes = styles();

  // JSX Return
  return (
    <>
      <Link to={"/"} className={classes.logo}>
        <img src={logo} alt={"Logo"} />
      </Link>
    </>
  );
};

export default Logo;
