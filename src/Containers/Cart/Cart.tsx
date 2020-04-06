import React from "react";
import styles from "./Cart.styles";
import { connect } from "react-redux";
import NoItemInCart from "../../Components/NoItemInCart/NoItemInCart";

const Cart = ({ isAuthenticated }: CartProps) => {
  const classes = styles();

  return (
    <>
      {isAuthenticated ? (
        <NoItemInCart />
      ) : (
        <div>You are not Authenticated</div>
      )}
    </>
  );
};

interface CartProps {
  isAuthenticated: boolean;
}

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.user.authenticated
  };
};

export default connect(mapStateToProps)(Cart);
