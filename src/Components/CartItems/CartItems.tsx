import React from "react";
import { IProduct } from "../../../types/Store";
import styles from "./CartItems.styles";

const CartItems = ({ products }: CartItemsProps) => {
  const classes = styles();

  return <div></div>;
};

interface CartItemsProps {
  products?: Array<IProduct>;
}

export default CartItems;
