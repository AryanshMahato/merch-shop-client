import React from "react";
import Background from "../Background/Background";
import styles from "./NoItemInCart.styles";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const NoItemInCart = () => {
  const classes = styles();

  return (
    <Background className={classes.root}>
      <h1 className={classes.annotation}>There is no Item in Cart</h1>
      <Link to={"/"}>
        <FaCartPlus className={classes.cartIcon} />
      </Link>
      <p className={classes.comment}>Add Items to cart</p>
    </Background>
  );
};

export default NoItemInCart;
