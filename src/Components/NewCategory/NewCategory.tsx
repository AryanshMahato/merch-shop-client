import React from "react";
import { Modal } from "@material-ui/core";

const NewCategory = ({ show, handleClose }: NewCategoryProps) => {
  return (
    <Modal open={show} onClose={handleClose}>
      <h1>Hello</h1>
    </Modal>
  );
};

interface NewCategoryProps {
  show: boolean;
  handleClose: () => void;
}

export default NewCategory;
