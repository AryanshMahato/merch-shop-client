import React, { useEffect } from "react";
import { fetchProduct } from "../../Store/Action/Product";
import { connect } from "react-redux";
import { IProduct } from "../../../types/Store";
import ProductCard from "../../Global/Card/ProductCard";
import styles from "./Products.styles";

interface ProductsProps {
  products: Array<IProduct>;
  fetchProduct: () => void;
}

const Products = ({ products, fetchProduct }: ProductsProps) => {
  const classes = styles();

  useEffect(() => {
    fetchProduct();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.product}>
      {products.map(product => (
        <ProductCard
          image={`http://localhost:8000/api/product/image/${product._id}`}
          name={product.name}
          price={product.price}
          category={product.category.name}
          key={product._id}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    products: state.products
  };
};
const mapDispatchToProps = { fetchProduct };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
