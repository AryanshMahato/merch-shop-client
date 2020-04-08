import React from "react";
import { IProduct } from "../../../../types/Store";
import styles from "./CartItem.styles";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { deleteItemInCart } from "../../../Store/Action/Cart";

const CartItem = ({ product, deleteItemInCart }: CartItemProps) => {
  const classes = styles();

  const removeItemClicked = () => {
    deleteItemInCart(product._id);
  };

  return (
    <div className={classes.root}>
      <img
        src={process.env.REACT_APP_STATIC_LINK + product.imageName}
        alt={product.name}
        className={classes.image}
      />
      <div className={classes.info}>
        <h1 className={classes.name}>{product.name}</h1>
        <p className={classes.category}>{product.category.name}</p>
        <p>{product.description.slice(0, 50)}</p>
      </div>
      {/*TODO: Include Add remove button*/}
      <Button
        variant={"text"}
        className={classes.removeButton}
        onClick={removeItemClicked}
      >
        Remove
      </Button>
      <p className={classes.price}>
        <span className={classes.priceSign}>$</span>
        {product.price}
      </p>
      <div className={classes.mobileButtonAndPrice}>
        <Button
          variant={"text"}
          className={classes.removeButton}
          onClick={removeItemClicked}
        >
          Remove
        </Button>
        <p className={classes.price}>
          <span className={classes.priceSign}>$</span>
          {product.price}
        </p>
      </div>
    </div>
  );
};

interface CartItemProps {
  product: IProduct;
  deleteItemInCart: (productId: string) => void;
}

const mapDispatchToProps = { deleteItemInCart };

export default connect(null, mapDispatchToProps)(CartItem);
