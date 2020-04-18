import React from "react";
import {
  Modal,
} from "@material-ui/core";
import styles from "./NewProduct.styles";
import {
  CancelButton,
  SaveButton,
} from "../../../Global/Button/Buttons";
import { IProduct } from "../../../../types/Store";
import ImageInput from "../../../Global/ImageInput/ImageInput";
import ProductForm from "../../../Containers/Forms/ProductForm/ProductForm";

const NewProduct = ({
  show,
  handleClose,
  newProductSaved,
}: NewProductProps) => {
  const classes = styles();

  const getImage = (file: File) => {
    console.log(file);
  };

  return (
    <Modal
      // open={show}
      open={true}
      onClose={handleClose}
      className={classes.root}
    >
      <div className={classes.paper}>
        <ImageInput getImageToParent={getImage} />
        <ProductForm />
        <div className={classes.buttons}>
          <CancelButton />
          <SaveButton />
        </div>
      </div>
    </Modal>
  );
};

interface NewProductProps {
  show: boolean;
  handleClose: () => void;
  newProductSaved: (product: IProduct) => void;
}

export default NewProduct;
