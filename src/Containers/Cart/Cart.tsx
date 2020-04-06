import React from "react";
import styles from "./Cart.styles";
import { connect } from "react-redux";
import NoItemInCart from "../../Components/NoItemInCart/NoItemInCart";
import CartItems from "../../Components/CartItems/CartItems";

const Cart = ({ isAuthenticated, products }: CartProps) => {
  const classes = styles();

  if (!isAuthenticated) return <div>You are not Authenticated</div>;

  return <>{products.length ? <CartItems/> : <NoItemInCart />}</>;
};

interface CartProps {
  isAuthenticated: boolean;
  products: Array<any>;
}

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.user.authenticated,
    products: state.user.data.cart?.products
  };
};

export default connect(mapStateToProps)(Cart);
