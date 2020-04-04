import React from "react";
import { withRouter } from "react-router-dom";
import Background from "../Components/Background/Background";
import Product from "../Containers/Product/Product";

const ProductPage = ({ match }: any) => {
  return (
    <Background>
      <Product id={match.params.id} />
    </Background>
  );
};

export default withRouter(ProductPage);
