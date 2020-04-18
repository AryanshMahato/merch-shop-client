import React, { useState } from "react";
import AdminProductAnnotation from "../../Components/AdminProduct/AdminProductAnnotation/AdminProductAnnotation";
import AdminProductList from "../../Components/AdminProduct/AdminProductList/AdminProductList";
import NewProduct from "../../Components/AdminProduct/NewProduct/NewProduct";
import styles from "./AdminProduct.styles";
import Background from "../../Components/Background/Background";
import { IProduct } from "../../../types/Store";

const AdminProduct = () => {
  const classes = styles();

  const [showModal, setShowModal] = useState(
    false
  );

  const newProductSaved = (
    product: IProduct
  ) => {};

  return (
    <Background className={classes.root}>
      <div className={classes.annotation}>
        <AdminProductAnnotation
          newButtonClicked={() =>
            setShowModal(true)
          }
        />
      </div>
      <AdminProductList />
      <NewProduct
        show={showModal}
        handleClose={() => setShowModal(false)}
        newProductSaved={newProductSaved}
      />
    </Background>
  );
};

export default AdminProduct;
