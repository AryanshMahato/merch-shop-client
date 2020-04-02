import ActionTypes from "./ActionTypes";
import fetchProducts from "../../Core/Product/fetchProducts";
import { IProduct } from "../../../types/Store";

export function getProducts() {
  return async (dispatch: any) => {
    const products: Array<IProduct> = await fetchProducts();

    if (products?.length === 0) {
      dispatch({
        type: ActionTypes.SET_ERROR,
        error: "No Product Found"
      });
    } else {
      dispatch({ type: ActionTypes.FETCH_PRODUCT, products });
    }
  };
}
