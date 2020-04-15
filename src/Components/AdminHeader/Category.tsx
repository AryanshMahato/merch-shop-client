import React from "react";
import styles from "./AdminCategory.styles";
import { NewButton } from "../../Global/Button/Buttons";

const Category = () => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <h1>Categories</h1>
      <NewButton>New Category</NewButton>
    </div>
  );
};

export default Category;
