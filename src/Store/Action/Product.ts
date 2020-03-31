import ActionTypes from "./ActionTypes";
import fetchProducts from "../../Core/Product/fetchProducts";

export function fetchProduct() {
  return async (dispatch: any) => {
    const products = await fetchProducts();
    dispatch({ type: ActionTypes.SET_PRODUCTS, products });
  };
}
