import React, {
  useEffect,
  useState,
} from "react";
import { connect } from "react-redux";
import { getProduct } from "../../Store/Action/Product";
import { IProduct } from "../../../types/Store";
import ProductImage from "../../Components/ProductImage/ProductImage";
import ProductActionButtons from "../../Components/ProductActionButtons/ProductActionButtons";
import ProductInfo from "../../Components/ProductInfo/ProductInfo";
import styles from "./Product.styles";
import { addToCart } from "../../Store/Action/Cart";
import { Redirect } from "react-router-dom";
import UnAuthorizedPopUp from "../../Components/UnAuthorizedPopup/UnAuthorizedPopUp";

//? Main Function
const Product = ({
  id,
  getProduct,
  product,
  addToCart,
  isLoading,
  purchaseCompleted,
  isAuthenticated,
}: ProductProps) => {
  const classes = styles();

  const [showPopUp, setShowPopUp] = useState(
    false
  );

  useEffect(() => {
    getProduct(id);
  }, []);

  const addToCartClicked = () => {
    if (!isAuthenticated) {
      setShowPopUp(true);
    }
    addToCart(id);
  };

  //? JSX Return
  if (product.name)
    return (
      <>
        {purchaseCompleted && !isLoading ? (
          <Redirect to={"/order"} />
        ) : null}

        {showPopUp ? (
          <UnAuthorizedPopUp
            show={showPopUp}
            handleClose={() =>
              setShowPopUp(false)
            }
          />
        ) : null}

        <div className={classes.root}>
          <div className={classes.leftPart}>
            <ProductImage
              imageLink={
                process.env
                  .REACT_APP_STATIC_LINK +
                product.imageName
              }
            />
            <ProductActionButtons
              addToCartClicked={addToCartClicked}
              product={product}
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
      </>
    );
  else return <></>;
};

interface ProductProps {
  id: string;
  getProduct: (id: string) => void;
  product: IProduct;
  addToCart: (productId: string) => void;
  isLoading: boolean;
  purchaseCompleted: boolean;
  isAuthenticated: boolean;
}

function mapStateToProps(state: any) {
  return {
    product: state.product.product,
    isLoading: state.core.isLoading,
    purchaseCompleted:
      state.orders.purchaseCompleted,
    isAuthenticated: state.user.authenticated,
  };
}

const mapDispatchToProps = {
  getProduct,
  addToCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
