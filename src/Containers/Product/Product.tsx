import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProduct } from "../../Store/Action/Product";
import { IProduct } from "../../../types/Store";
import ProductImage from "../../Components/ProductImage/ProductImage";
import ProductActionButtons from "../../Components/ProductActionButtons/ProductActionButtons";
import ProductInfo from "../../Components/ProductInfo/ProductInfo";
import styles from "./Product.styles";

//? Main Function
const Product = ({ id, getProduct, product }: ProductProps) => {
  const classes = styles();

  useEffect(() => {
    getProduct(id);
  }, []);

  const addToCartClicked = () => {
    console.log("Add To Cart Clicked", id);
  };

  const buyNowClicked = () => {
    console.log("Buy Now Clicked Clicked", id);
  };

  //? JSX Return
  if (product.name)
    return (
      <div className={classes.root}>
        <div className={classes.leftPart}>
          <ProductImage
            imageLink={process.env.REACT_APP_STATIC_LINK + product.imageName}
          />
          <ProductActionButtons
            addToCartClicked={addToCartClicked}
            buyNowClicked={buyNowClicked}
          />
        </div>
        <div className={classes.rightPart}>
          <ProductInfo
            name={product.name}
            price={product.price}
            category={product.category.name}
            description={product.description}
          />
        </div>
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
