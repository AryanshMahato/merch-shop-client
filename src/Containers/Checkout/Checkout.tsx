import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { ProceedForPaymentButton } from "../../Global/Button/Buttons";
import styles from "./Checkout.styles";
import { purchaseCart } from "../../Store/Action/Order";
import { connect } from "react-redux";

const Checkout = ({ price, purchaseCart }: CheckoutProps) => {
  const classes = styles();

  const onToken = (token: any) => {
    purchaseCart(token);
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
  purchaseCart: (token: any) => void;
}

const mapDispatchToProps = { purchaseCart };

export default connect(null, mapDispatchToProps)(Checkout);
