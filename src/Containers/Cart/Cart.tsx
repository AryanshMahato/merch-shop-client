import React, { useEffect } from "react";
import styles from "./Cart.styles";
import { connect } from "react-redux";

const Cart = ({ isAuthenticated }: CartProps) => {
  const classes = styles();
  console.log(isAuthenticated);

  return (
    <>
      {isAuthenticated ? (
        <div>Hello</div>
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
