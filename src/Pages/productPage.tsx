import React from "react";
import { withRouter } from "react-router-dom";
import ProductBackground from "../Components/ProductBackground/ProductBackground";
import Product from "../Containers/Product/Product";

const ProductPage = ({ match }: any) => {
  return (
    <ProductBackground>
      <Product id={match.params.id} />
    </ProductBackground>
  );
};

export default withRouter(ProductPage);
