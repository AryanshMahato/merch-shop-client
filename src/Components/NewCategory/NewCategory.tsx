import React from "react";
import { Modal, TextField } from "@material-ui/core";
import styles from "./NewCategory.styles";
import { SaveButton } from "../../Global/Button/Buttons";

const NewCategory = ({ show, handleClose }: NewCategoryProps) => {
  const classes = styles();

  return (
    <Modal open={show} onClose={handleClose} className={classes.root}>
      <div className={classes.paper}>
        <TextField
          label={"Category"}
          variant={"outlined"}
          className={classes.input}
        />
        <SaveButton />
      </div>
    </Modal>
  );
};

interface NewCategoryProps {
  show: boolean;
  handleClose: () => void;
}

export default NewCategory;
