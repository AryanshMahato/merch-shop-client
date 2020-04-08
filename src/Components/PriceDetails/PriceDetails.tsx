import React from "react";
import { IProduct } from "../../../types/Store";
import { connect } from "react-redux";
import styles from "./PriceDetails.styles";
import { Divider } from "@material-ui/core";
import { ProceedForPaymentButton } from "../../Global/Button/Buttons";

const PriceDetails = ({ products }: PriceDetailsProps) => {
  const classes = styles();

  const calcTotalPrice = () => {
    let totalPrice = 0;
    if (products)
      products.forEach(product => {
        totalPrice += product.price;
      });
    return totalPrice;
  };

  return (
    <div className={classes.root}>
      <h1 className={classes.annotation}>Price Details</h1>
      <Divider />
      <div className={classes.price}>
        <p className={classes.priceAnnotation}>Price</p>
        <p className={classes.priceValue}>
          <span style={{ fontWeight: "bold" }}>$</span>
          {calcTotalPrice()}
        </p>
      </div>
      <div className={classes.deliveryCharges}>
        <p className={classes.deliveryChargesAnnotation}>Delivery Charges</p>
        <p className={classes.deliveryChargesValue}>
          <span style={{ fontWeight: "bold" }}>$</span>1
        </p>
      </div>
      <ProceedForPaymentButton />
    </div>
  );
};

interface PriceDetailsProps {
  products: Array<IProduct>;
}

const mapStateToProps = (state: any) => {
  return {
    products: state.cart?.products
  };
};

export default connect(mapStateToProps)(PriceDetails);
