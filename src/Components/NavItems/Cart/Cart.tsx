import React from "react";
import styles from "./Cart.styles";
import { FaCartPlus, FaShoppingCart } from "react-icons/fa";

interface CartProps {
  cartItems: number;
}

const Cart = ({ cartItems }: CartProps) => {
  const classes = styles();

  if (cartItems === 0)
    return (
      <div className={classes.root}>
        <FaCartPlus className={classes.cart} />
      </div>
    );
  else
    return (
      <div className={classes.root}>
        <FaShoppingCart className={classes.cart} />
        <div>{cartItems}</div>
      </div>
    );
};

export default Cart;
