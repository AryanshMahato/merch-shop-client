import React, { useState } from "react";
import { Modal, TextField } from "@material-ui/core";
import styles from "./NewCategory.styles";
import { SaveButton } from "../../Global/Button/Buttons";

const NewCategory = ({
  show,
  handleClose,
  newCategorySaved
}: NewCategoryProps) => {
  const classes = styles();

  const [category, setCategory] = useState("");

  return (
    <Modal open={show} onClose={handleClose} className={classes.root}>
      <div className={classes.paper}>
        <TextField
          label={"Category"}
          variant={"outlined"}
          className={classes.input}
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
        <SaveButton
          onClick={() => {
            newCategorySaved(category);
            setCategory("");
          }}
        />
      </div>
    </Modal>
  );
};

interface NewCategoryProps {
  show: boolean;
  handleClose: () => void;
  newCategorySaved: (category: string) => void;
}

export default NewCategory;
