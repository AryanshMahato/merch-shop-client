import ActionTypes from "./ActionTypes";
import fetchProducts from "../../Core/Product/fetchProducts";
import { IProduct } from "../../../types/Store";

export function fetchProduct() {
  return async (dispatch: any) => {
    const response = await fetchProducts();
    const products: Array<IProduct> = response.data.products;
    dispatch({ type: ActionTypes.SET_PRODUCTS, products });
  };
}
