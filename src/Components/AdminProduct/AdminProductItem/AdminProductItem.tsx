import React, { useState } from "react";
import { IProduct } from "../../../../types/Store";
import styles from "./AdminProductItem.styles";
import {
  DeleteButton,
  EditButton,
} from "../../../Global/Button/Buttons";
import NewProduct from "../NewProduct/NewProduct";
import { deleteProduct } from "../../../Store/Action/AdminProduct";
import { connect } from "react-redux";

const AdminProductItem = ({
  product,
  deleteProduct,
}: AdminProductItemProps) => {
  const classes = styles();

  const [showEdit, setShowEdit] = useState(false);

  return (
    <div className={classes.root}>
      <img
        src={
          process.env.REACT_APP_STATIC_LINK +
          product.imageName
        }
        alt={product.name}
        className={classes.image}
      />
      <div className={classes.info}>
        <h1 className={classes.name}>
          {product.name}
        </h1>
        <p>{product.category.name}</p>
        <p className={classes.price}>
          <span>$</span>
          {product.price}
        </p>
      </div>
      <div className={classes.buttons}>
        <DeleteButton
          onClick={() =>
            deleteProduct(product._id)
          }
        />
        <EditButton
          onClick={() => setShowEdit(true)}
        />
      </div>
      <NewProduct
        defaults={{ ...product }}
        show={showEdit}
        handleClose={() => setShowEdit(false)}
        newProductSaved={() => {
          console.log("hi");
        }}
      />
    </div>
  );
};

interface AdminProductItemProps {
  product: IProduct;
  deleteProduct: (id: string) => void;
}

const mapDispatchToProps = { deleteProduct };

export default connect(
  null,
  mapDispatchToProps
)(AdminProductItem);
