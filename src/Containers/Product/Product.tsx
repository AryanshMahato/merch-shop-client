import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProduct } from "../../Store/Action/Product";

const Product = ({ id, getProduct }: ProductProps) => {
  useEffect(() => {
    getProduct(id);
  }, []);
  return <div></div>;
};

interface ProductProps {
  id: string;
  getProduct: (id: string) => void;
}

function mapStateToProps(state: any) {
  return {};
}

const mapDispatchToProps = { getProduct };

export default connect(mapStateToProps, mapDispatchToProps)(Product);
