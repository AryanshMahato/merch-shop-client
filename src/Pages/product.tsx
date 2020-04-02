import React from "react";
import { withRouter } from "react-router-dom";
import ProductBackground from "../Components/ProductBackground/ProductBackground";
import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  background: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

const Product = ({ match }: any) => {
  const classes = styles();
  return (
    <ProductBackground className={classes.background}>
      Individual Product will be shown here
    </ProductBackground>
  );
};

export default withRouter(Product);
