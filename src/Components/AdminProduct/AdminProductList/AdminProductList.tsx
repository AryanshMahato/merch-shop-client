import React from "react";
import styles from "./AdminProductList.styles";
import { IProduct } from "../../../../types/Store";
import { connect } from "react-redux";
import AdminProductItem from "../AdminProductItem/AdminProductItem";

const AdminProductList = ({
  products,
}: AdminProductListProps) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      {products.map((product) => (
        <AdminProductItem
          product={product}
          key={product._id}
        />
      ))}
    </div>
  );
};

interface AdminProductListProps {
  products: Array<IProduct>;
}

const mapStateToProps = (state: any) => {
  return {
    products: state.product.products,
  };
};

export default connect(mapStateToProps)(
  AdminProductList
);
