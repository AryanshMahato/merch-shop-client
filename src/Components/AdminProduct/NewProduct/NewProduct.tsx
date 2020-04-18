import React, { useState } from "react";
import {
  Modal,
  TextField,
} from "@material-ui/core";
import styles from "./NewProduct.styles";
import { SaveButton } from "../../../Global/Button/Buttons";
import { IProduct } from "../../../../types/Store";
import ImageInput from "../../../Global/ImageInput/ImageInput";

const NewProduct = ({
  show,
  handleClose,
  newProductSaved,
}: NewProductProps) => {
  const classes = styles();

  const [product, setProduct] = useState({});

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
        <SaveButton
          onClick={() => {
            newProductSaved(product as IProduct);
            setProduct("");
          }}
        />
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
