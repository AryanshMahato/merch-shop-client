import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProduct } from "../../Store/Action/Product";
import { IProduct } from "../../../types/Store";
import ProductImage from "../../Components/ProductImage/ProductImage";
import ProductActionButtons from "../../Components/ProductActionButtons/ProductActionButtons";

//? Main Function
const Product = ({ id, getProduct, product }: ProductProps) => {
  useEffect(() => {
    getProduct(id);
  }, []);

  //? JSX Return
  return (
    <div>
      <ProductImage
        imageLink={process.env.REACT_APP_STATIC_LINK + product.imageName}
      />
      <ProductActionButtons />
    </div>
  );
};

interface ProductProps {
  id: string;
  getProduct: (id: string) => void;
  product: IProduct;
}

function mapStateToProps(state: any) {
  return {
    product: state.product.product
  };
}

const mapDispatchToProps = { getProduct };

export default connect(mapStateToProps, mapDispatchToProps)(Product);
