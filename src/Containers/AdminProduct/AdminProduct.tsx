import React from "react";
import AdminProductAnnotation from "../../Components/AdminProduct/AdminProductAnnotation/AdminProductAnnotation";
import AdminProductList from "../../Components/AdminProduct/AdminProductList/AdminProductList";
import NewProduct from "../../Components/AdminProduct/NewProduct/NewProduct";

const AdminProduct = () => {
  return (
    <div>
      <div>
        <AdminProductAnnotation />
      </div>
      <AdminProductList />
      <NewProduct />
    </div>
  );
};

export default AdminProduct;
