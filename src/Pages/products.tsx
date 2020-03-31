import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../Store/Action/Product";

const Products = ({ products, fetchProduct }: any) => {
  useEffect(() => {
    fetchProduct();
  }, []);

  return <h1>Hey There</h1>;
};

const mapStateToProps = (state: any) => {
  return {
    products: state.products
  };
};
const mapDispatchToProps = { fetchProduct };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
