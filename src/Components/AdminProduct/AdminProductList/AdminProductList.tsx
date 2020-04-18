import React from "react";
import styles from "./AdminProductList.styles";
import { IProduct } from "../../../../types/Store";
import { connect } from "react-redux";

const AdminProductList = ({
  products,
}: AdminProductListProps) => {
  const classes = styles();

  return <div>Admin Product List</div>;
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
