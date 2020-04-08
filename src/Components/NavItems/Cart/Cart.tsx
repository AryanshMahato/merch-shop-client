import React from "react";
import styles, { StyledBadge } from "./Cart.styles";
import { FaCartPlus, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

interface CartProps {
  cartItems?: number;
}

//? Main Function
const Cart = ({ cartItems }: CartProps) => {
  const classes = styles();

  if (cartItems === 0)
    return (
      <Link to={"/cart"} className={classes.link}>
        <FaCartPlus className={classes.cart} />
      </Link>
    );
  else
    return (
      <Link to={"/cart"} className={classes.link}>
        <StyledBadge
          badgeContent={cartItems}
          color="secondary"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <FaShoppingCart className={classes.cart} />
        </StyledBadge>
      </Link>
    );
};

//? Default Props
Cart.defaultProps = {
  cartItems: 0
};

export default Cart;
