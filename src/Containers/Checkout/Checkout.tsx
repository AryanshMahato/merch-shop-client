import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { ProceedForPaymentButton } from "../../Global/Button/Buttons";
import styles from "./Checkout.styles";

const Checkout = ({ price }: CheckoutProps) => {
  const classes = styles();

  const onToken = () => {
    console.log("Payment Successful");
  };

  return (
    <div className={classes.root}>
      <StripeCheckout
        stripeKey={process.env.REACT_APP_STRIPE_KEY!}
        token={onToken}
        amount={price * 100}
      >
        <ProceedForPaymentButton />
      </StripeCheckout>
    </div>
  );
};

interface CheckoutProps {
  price: number;
}

export default Checkout;
