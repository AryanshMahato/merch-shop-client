import React from "react";
import { IProduct } from "../../../types/Store";
import styles from "./CartItems.styles";
import { connect } from "react-redux";

const CartItems = ({ cartProducts }: CartItemsProps) => {
  const classes = styles();

  return <div>Cart</div>;
};

interface CartItemsProps {
  cartProducts: Array<IProduct>;
}

const mapStateToProps = (state: any) => {
  return {
    cartProducts: state.cart?.products
  };
};

export default connect(mapStateToProps)(CartItems);
