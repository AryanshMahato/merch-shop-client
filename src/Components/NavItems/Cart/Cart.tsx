import React from "react";
import styles, { StyledBadge } from "./Cart.styles";
import { FaCartPlus, FaShoppingCart } from "react-icons/fa";

interface CartProps {
  cartItems: number;
}

const Cart = ({ cartItems }: CartProps) => {
  const classes = styles();

  if (cartItems === 0) return <FaCartPlus className={classes.cart} />;
  else
    return (
      <StyledBadge
        badgeContent={cartItems}
        color="secondary"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <FaShoppingCart className={classes.cart} />
      </StyledBadge>
    );
};

export default Cart;
