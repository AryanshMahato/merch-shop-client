import React from "react";
import styles from "./SplashScreen.styles";
import { Modal } from "@material-ui/core";

const SplashScreen = () => {
  const classes = styles();
  return (
    <Modal open={true} className={classes.root}>
      <h1 className={classes.annotation}>Loading... Please Wait</h1>
    </Modal>
  );
};

export default SplashScreen;
