import React, { FunctionComponent } from "react";
import { IProduct } from "../../../types/Store";
import styles from "./CartItems.styles";
import { connect } from "react-redux";
import CartItem from "./CartItem/CartItem";

const CartItems = ({ cartProducts }: CartItemsProps) => {
  const classes = styles();

  if (cartProducts)
    return (
      <>
        {cartProducts.map(product => (
          <CartItem product={product} key={product._id} />
        ))}
      </>
    );
  else return;
};

interface CartItemsProps {
  cartProducts: Array<IProduct>;
}

const mapStateToProps = (state: any) => {
  return {
    cartProducts: state.cart?.products
  };
};

export default connect(mapStateToProps)(CartItems as FunctionComponent);
