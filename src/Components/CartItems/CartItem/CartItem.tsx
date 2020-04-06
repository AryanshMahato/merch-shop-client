import React from "react";
import { IProduct } from "../../../../types/Store";

const CartItem = ({ product }: CartItemProps) => {
  console.log(product.name);
  return <div></div>;
};

interface CartItemProps {
  product: IProduct;
}

export default CartItem;
