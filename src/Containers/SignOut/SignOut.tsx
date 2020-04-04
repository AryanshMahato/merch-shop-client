import React from "react";
import styles from "./SignOut.styles";
import { BrowseMoreProductsButton } from "../../Global/Button/Buttons";

const SignOut = () => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <h1 className={classes.annotation}>Logged Out Successfully</h1>
      <BrowseMoreProductsButton />
    </div>
  );
};

export default SignOut;
