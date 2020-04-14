import ActionTypes from "./ActionTypes";
import fetchProducts from "../../Core/Product/fetchProducts";
import { IProduct } from "../../../types/Store";
import fetchProduct from "../../Core/Product/fetchProduct";

export function getProducts() {
  return async (dispatch: any) => {
    const products: Array<IProduct> = await fetchProducts();

    dispatch({ type: ActionTypes.IS_LOADING, isLoading: true });

    if (products?.length === 0) {
      dispatch({
        type: ActionTypes.SET_ERROR,
        error: "No Product Found"
      });
    } else {
      dispatch({ type: ActionTypes.IS_LOADING, isLoading: false });
      dispatch({ type: ActionTypes.FETCH_PRODUCTS, products });
    }
  };
}

export function getProduct(id: string) {
  return async (dispatch: any) => {
    dispatch({ type: ActionTypes.IS_LOADING, isLoading: true });

    const product: IProduct = await fetchProduct(id);
    if (!product) {
      dispatch({
        type: ActionTypes.SET_ERROR,
        error: "No Product Found"
      });
      dispatch({ type: ActionTypes.IS_LOADING, isLoading: false });
    } else {
      dispatch({ type: ActionTypes.IS_LOADING, isLoading: false });

      dispatch({ type: ActionTypes.FETCH_PRODUCT, product: product });
    }
  };
}
