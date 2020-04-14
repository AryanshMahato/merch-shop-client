import React from "react";
import Orders from "../Containers/Orders/Orders";
import { connect } from "react-redux";
import { IProduct } from "../../types/Store";

const OrderPage = ({ orderedProducts, orderedProduct }: OrderPageProps) => {
  return <Orders products={orderedProducts} product={orderedProduct} />;
};

interface OrderPageProps {
  orderedProducts: Array<IProduct>;
  orderedProduct: IProduct;
}

const mapStateToProps = (state: any) => {
  return {
    orderedProducts: state.orders.products,
    orderedProduct: state.orders.product
  };
};

export default connect(mapStateToProps)(OrderPage);
