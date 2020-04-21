import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { IProduct } from "../../../types/Store";
import ProductCard from "../../Global/Card/ProductCard";
import styles from "./Products.styles";
import { withRouter } from "react-router-dom";

interface ProductsProps {
  products: Array<IProduct>;
  history: any;
}

// Main Function
const Products = ({
  products,
  history,
}: ProductsProps) => {
  const classes = styles();

  // Product Click Handler
  const productClicked = (id: string) => {
    history.push(`product/${id}`);
  };
  // JSX Return
  return (
    <div className={classes.product}>
      {products.map((product) => (
        <ProductCard
          image={
            process.env.REACT_APP_STATIC_LINK +
            product.imageName
          }
          name={product.name}
          price={product.price}
          category={product.category.name}
          id={product._id}
          productClicked={productClicked}
          key={product._id}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    products: state.product.products,
  };
};

export default connect(mapStateToProps)(
  withRouter(Products as FunctionComponent)
);
