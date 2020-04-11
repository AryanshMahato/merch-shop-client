import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { ProceedForPaymentButton } from "../../Global/Button/Buttons";
import styles from "./Checkout.styles";
import { purchaseCart } from "../../Store/Action/Order";
import { connect } from "react-redux";

const Checkout = ({ price, purchaseCart, userEmail }: CheckoutProps) => {
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
        email={userEmail}
      >
        <ProceedForPaymentButton />
      </StripeCheckout>
    </div>
  );
};

interface CheckoutProps {
  price: number;
  userEmail: string;
  purchaseCart: (token: any) => void;
}

const mapStateToProps = (state: any) => {
  return {
    userEmail: state.user.data.email
  };
};

const mapDispatchToProps = { purchaseCart };

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
