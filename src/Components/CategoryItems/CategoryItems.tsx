import React from "react";
import { ICategory } from "../../../types/Store";
import styles from "./CategoryItems.styles";
import { DeleteButton, EditButton } from "../../Global/Button/Buttons";

const CategoryItems = ({ category }: CategoryItemsProps) => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <h1 className={classes.category}>{category.name}</h1>
      <div className={classes.buttons}>
        <DeleteButton />
        <EditButton />
      </div>
    </div>
  );
};

interface CategoryItemsProps {
  category: ICategory;
}

export default CategoryItems;
