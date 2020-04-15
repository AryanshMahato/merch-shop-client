import React, { useState } from "react";
import { ICategory } from "../../../types/Store";
import styles from "./CategoryItems.styles";
import { DeleteButton, EditButton } from "../../Global/Button/Buttons";
import UpdateCategory from "../UpdateCategory/UpdateCategory";
import { connect } from "react-redux";
import { deleteCategory, updateCategory } from "../../Store/Action/Category";

const CategoryItems = ({
  category,
  updateCategory,
  deleteCategory
}: CategoryItemsProps) => {
  const classes = styles();

  const [showModal, setShowModal] = useState(false);

  const updateClicked = (category: string, id: string) => {
    updateCategory(id, category);
    setShowModal(false);
  };

  const deleteClicked = (id: string) => {
    deleteCategory(id);
  };

  return (
    <div className={classes.root}>
      <h1 className={classes.category}>{category.name}</h1>
      <div className={classes.buttons}>
        <DeleteButton onClick={() => deleteClicked(category._id)} />
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
  updateCategory: (id: string, category: string) => void;
  deleteCategory: (id: string) => void;
}

const mapDispatchToProps = { updateCategory, deleteCategory };

export default connect(null, mapDispatchToProps)(CategoryItems);
