import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { ProceedForPaymentButton } from "../../Global/Button/Buttons";
import styles from "./Checkout.styles";
import { purchaseCart } from "../../Store/Action/Order";
import { connect } from "react-redux";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import { Redirect } from "react-router-dom";

const Checkout = ({
  price,
  purchaseCart,
  userEmail,
  isLoading,
  purchaseCompleted
}: CheckoutProps) => {
  const classes = styles();

  const onToken = (token: any) => {
    purchaseCart(token);
  };

  return (
    <>
      {purchaseCompleted && !isLoading ? <Redirect to={"/order"} /> : null}
      <LoadingScreen />
      <div className={classes.root}>
        <StripeCheckout
          stripeKey={process.env.REACT_APP_STRIPE_KEY!}
          token={onToken}
          amount={price * 100}
          email={userEmail}
        >
          <ProceedForPaymentButton />
        </StripeCheckout>
      </div>
    </>
  );
};

interface CheckoutProps {
  price: number;
  userEmail: string;
  isLoading: boolean;
  purchaseCompleted: boolean;
  purchaseCart: (token: any) => void;
}

const mapStateToProps = (state: any) => {
  return {
    userEmail: state.user.data.email,
    isLoading: state.core.isLoading,
    purchaseCompleted: state.core.purchaseCompleted
  };
};

const mapDispatchToProps = { purchaseCart };

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
