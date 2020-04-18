import React, { useState } from "react";
import { Modal } from "@material-ui/core";
import styles from "./NewProduct.styles";
import {
  CancelButton,
  SaveButton,
} from "../../../Global/Button/Buttons";
import {
  ICategory,
  IProduct,
} from "../../../../types/Store";
import ImageInput from "../../../Global/ImageInput/ImageInput";
import ProductForm from "../../../Containers/Forms/ProductForm/ProductForm";

const NewProduct = ({
  show,
  handleClose,
  newProductSaved,
  defaults,
}: NewProductProps) => {
  const classes = styles();

  const [
    productData,
    setProductData,
  ] = useState();

  const getImage = (file: File) => {
    setProductData({
      ...productData,
      image: file,
    });
  };

  const getDataFromChild = (data: any) => {
    setProductData({ ...productData, ...data });
  };

  console.log(productData);

  return (
    <Modal
      open={show}
      onClose={handleClose}
      className={classes.root}
    >
      <div className={classes.paper}>
        {!defaults?.name ? (
          <ImageInput
            getImageToParent={getImage}
          />
        ) : null}
        <ProductForm
          defaults={defaults}
          sendDataToParent={getDataFromChild}
        />
        <div className={classes.buttons}>
          <CancelButton onClick={handleClose} />
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
  defaults?: {
    name: string;
    category: ICategory;
    price: number;
    description: string;
  };
}

export default NewProduct;
