import React from "react";
import styles from "./AdminProductAnnotation.styles";
import { NewButton } from "../../../Global/Button/Buttons";

const AdminProductAnnotation = ({
  newButtonClicked,
}: AdminProductAnnotationProps) => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <h1 className={classes.annotation}>
        Products
      </h1>
      <NewButton
        className={classes.button}
        onClick={newButtonClicked}
      >
        New Product
      </NewButton>
    </div>
  );
};

interface AdminProductAnnotationProps {
  newButtonClicked: () => void;
}

export default AdminProductAnnotation;
