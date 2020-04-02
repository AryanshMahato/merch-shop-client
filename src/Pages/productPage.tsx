import React from "react";
import { withRouter } from "react-router-dom";
import ProductBackground from "../Components/ProductBackground/ProductBackground";
import { makeStyles } from "@material-ui/core";
import Product from "../Containers/Product/Product";

const styles = makeStyles(() => ({
  background: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

const ProductPage = ({ match }: any) => {
  const classes = styles();
  return (
    <ProductBackground className={classes.background}>
      <Product id={match.params.id} />
    </ProductBackground>
  );
};

export default withRouter(ProductPage);
