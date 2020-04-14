import React from "react";
import { connect } from "react-redux";
import OrderItems from "../OrderItems/OrderItems";
import { IProduct } from "../../../types/Store";
import Background from "../Background/Background";
import styles from "./OrderHistory.styles";
import { BrowseMoreProductsButton } from "../../Global/Button/Buttons";
import { Link } from "react-router-dom";

const OrderHistory = ({ orderedProducts }: OrderHistoryProps) => {
  const classes = styles();

  return (
    <Background maxWidth={"850px"} className={classes.root} id={"orders"}>
      {orderedProducts.length ? (
        <OrderItems products={orderedProducts} />
      ) : (
        <div className={classes.noProductFound}>
          <h1>You haven't made any Order Yet</h1>
          <Link to={"/"}>
            <BrowseMoreProductsButton />
          </Link>
        </div>
      )}
    </Background>
  );
};

interface OrderHistoryProps {
  orderedProducts: Array<IProduct>;
}

const mapStateToProps = (state: any) => ({
  orderedProducts: state.orders.historyProducts
});

export default connect(mapStateToProps)(OrderHistory);
