import React from "react";
import AdminProductAnnotation from "../../Components/AdminProduct/AdminProductAnnotation/AdminProductAnnotation";
import AdminProductList from "../../Components/AdminProduct/AdminProductList/AdminProductList";
import NewProduct from "../../Components/AdminProduct/NewProduct/NewProduct";
import styles from "./AdminProduct.styles";

const AdminProduct = () => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <div className={classes.annotation}>
        <AdminProductAnnotation />
      </div>
      <AdminProductList />
      <NewProduct />
    </div>
  );
};

export default AdminProduct;
