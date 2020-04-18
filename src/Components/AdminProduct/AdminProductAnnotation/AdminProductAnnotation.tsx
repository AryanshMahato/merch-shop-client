import React from "react";
import styles from "./AdminProductAnnotation.styles";
import { NewButton } from "../../../Global/Button/Buttons";

const AdminProductAnnotation = () => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <h1 className={classes.annotation}>Products</h1>
      <NewButton className={classes.button}>New Product</NewButton>
    </div>
  );
};

export default AdminProductAnnotation;
