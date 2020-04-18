import React, { useState } from "react";
import {
  Modal,
  TextField,
} from "@material-ui/core";
import styles from "./NewProduct.styles";
import { SaveButton } from "../../../Global/Button/Buttons";
import { IProduct } from "../../../../types/Store";

const NewProduct = ({
  show,
  handleClose,
  newProductSaved,
}: NewProductProps) => {
  const classes = styles();

  const [product, setProduct] = useState({});

  return (
    <Modal
      open={show}
      onClose={handleClose}
      className={classes.root}
    >
      <div className={classes.paper}>
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
