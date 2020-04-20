import React, { useEffect } from "react";
import styles from "./Cart.styles";
import { connect } from "react-redux";
import NoItemInCart from "../../Components/NoItemInCart/NoItemInCart";
import CartItems from "../../Components/CartItems/CartItems";
import { getCart } from "../../Store/Action/Cart";
import Background from "../../Components/Background/Background";
import PriceDetails from "../../Components/PriceDetails/PriceDetails";
import { Redirect } from "react-router-dom";
import UnAuthorizedPrompt from "../UnAuthorizedPrompt/UnAuthorizedPrompt";

const Cart = ({
  isAuthenticated,
  products,
  getCart,
  isLoading,
  purchaseCompleted,
}: CartProps) => {
  const classes = styles();

  useEffect(() => {
    getCart();
  }, []);

  if (!isAuthenticated)
    return <UnAuthorizedPrompt />;

  return (
    <>
      {purchaseCompleted && !isLoading ? (
        <Redirect to={"/order"} />
      ) : null}

      {products && products.length ? (
        <Background
          className={classes.background}
        >
          <div>
            <h1 className={classes.annotation}>
              Proceed to Buy
            </h1>
            <CartItems />
          </div>
          <PriceDetails />
        </Background>
      ) : (
        <NoItemInCart />
      )}
    </>
  );
};

interface CartProps {
  isAuthenticated: boolean;
  products: Array<any>;
  getCart: () => void;
  isLoading: boolean;
  purchaseCompleted: boolean;
}

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.user.authenticated,
    products: state.cart?.products,
    isLoading: state.core.isLoading,
    purchaseCompleted:
      state.orders.purchaseCompleted,
  };
};

const mapDispatchToProps = { getCart };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
