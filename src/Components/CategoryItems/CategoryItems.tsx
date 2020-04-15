import React, { useState } from "react";
import { ICategory } from "../../../types/Store";
import styles from "./CategoryItems.styles";
import { DeleteButton, EditButton } from "../../Global/Button/Buttons";
import UpdateCategory from "../UpdateCategory/UpdateCategory";

const CategoryItems = ({ category }: CategoryItemsProps) => {
  const classes = styles();

  const [showModal, setShowModal] = useState(false);

  const updateClicked = (category: string, id: string) => {
    console.log(category, id);
    setShowModal(false);
  };

  return (
    <div className={classes.root}>
      <h1 className={classes.category}>{category.name}</h1>
      <div className={classes.buttons}>
        <DeleteButton />
        <EditButton onClick={() => setShowModal(true)} />
      </div>
      <UpdateCategory
        category={category}
        show={showModal}
        handleClose={() => setShowModal(false)}
        updateCategorySaved={updateClicked}
      />
    </div>
  );
};

interface CategoryItemsProps {
  category: ICategory;
}

export default CategoryItems;
