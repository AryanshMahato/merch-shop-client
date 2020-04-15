import React from "react";
import styles from "./AdminCategory.styles";
import { NewButton } from "../../Global/Button/Buttons";

const Category = ({ newButtonClicked }: CategoryProps) => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <h1 className={classes.annotation}>Categories</h1>
      <NewButton onClick={newButtonClicked}>New Category</NewButton>
    </div>
  );
};

interface CategoryProps {
  newButtonClicked: () => void;
}

export default Category;
