import React from "react";
import AdminProductAnnotation from "../../Components/AdminProduct/AdminProductAnnotation/AdminProductAnnotation";
import AdminProductList from "../../Components/AdminProduct/AdminProductList/AdminProductList";
import NewProduct from "../../Components/AdminProduct/NewProduct/NewProduct";
import styles from "./AdminProduct.styles";
import Background from "../../Components/Background/Background";

const AdminProduct = () => {
  const classes = styles();
  return (
    <Background className={classes.root}>
      <div className={classes.annotation}>
        <AdminProductAnnotation />
      </div>
      <AdminProductList />
      <NewProduct />
    </Background>
  );
};

export default AdminProduct;
