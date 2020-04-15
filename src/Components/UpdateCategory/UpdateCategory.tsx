import React, { useState } from "react";
import styles from "../NewCategory/NewCategory.styles";
import { Modal, TextField } from "@material-ui/core";
import { SaveButton } from "../../Global/Button/Buttons";
import { ICategory } from "../../../types/Store";

const UpdateCategory = ({
  category,
  show,
  handleClose,
  updateCategorySaved
}: UpdateCategoryProps) => {
  const classes = styles();

  const [categoryState, setCategory] = useState(category.name);

  return (
    <Modal open={show} onClose={handleClose} className={classes.root}>
      <div className={classes.paper}>
        <TextField
          label={"Category"}
          variant={"outlined"}
          className={classes.input}
          value={categoryState}
          onChange={e => setCategory(e.target.value)}
        />
        <SaveButton
          onClick={() => updateCategorySaved(categoryState, category._id)}
        />
      </div>
    </Modal>
  );
};

interface UpdateCategoryProps {
  category: ICategory;
  show: boolean;
  handleClose: () => void;
  updateCategorySaved: (category: string, id: string) => void;
}

export default UpdateCategory;
