import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProduct } from "../../Store/Action/Product";
import { IProduct } from "../../../types/Store";
import ProductImage from "../../Components/ProductImage/ProductImage";
import ProductActionButtons from "../../Components/ProductActionButtons/ProductActionButtons";
import ProductInfo from "../../Components/ProductInfo/ProductInfo";

//? Main Function
const Product = ({ id, getProduct, product }: ProductProps) => {
  useEffect(() => {
    getProduct(id);
  }, []);

  //? JSX Return
  if (product.name)
    return (
      <div>
        <ProductImage
          imageLink={process.env.REACT_APP_STATIC_LINK + product.imageName}
        />
        <ProductActionButtons />
        <ProductInfo
          name={product.name}
          price={product.price}
          category={product.category.name}
        />
      </div>
    );
  else return <></>;
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
