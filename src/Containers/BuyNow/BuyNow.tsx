import React from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { BuyNowButton } from "../../Global/Button/Buttons";
import { buyNow } from "../../Store/Action/Order";
import { IProduct } from "../../../types/Store";

const BuyNow = ({ userEmail, buyNow, product }: BuyNowProps) => {
  const onToken = (token: any) => {
    buyNow(token, product._id);
  };

  return (
    <div>
      <StripeCheckout
        stripeKey={process.env.REACT_APP_STRIPE_KEY!}
        token={onToken}
        amount={product.price * 100}
        email={userEmail}
      >
        <BuyNowButton />
      </StripeCheckout>
    </div>
  );
};

interface BuyNowProps {
  userEmail: string;
  product: IProduct;
  buyNow: (token: any, productId: string) => void;
}

const mapStateToProps = (state: any) => {
  return {
    userEmail: state.user.data.email
  };
};

const mapDispatchToProps = { buyNow };

export default connect(mapStateToProps, mapDispatchToProps)(BuyNow);
