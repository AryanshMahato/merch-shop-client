import ActionTypes from "./ActionTypes";
import deleteProductAPI from "../../Core/AdminProduct/deleteProductAPI";
import fetchProducts from "../../Core/Product/fetchProducts";
import { IProduct } from "../../../types/Store";

const deleteProduct = (id: string) => async (
  dispatch: any,
  getState: any
) => {
  dispatch({
    type: ActionTypes.IS_LOADING,
    isLoading: true,
  });

  if (getState().user.authToken) {
    await deleteProductAPI(
      getState().user.authToken,
      id
    );

    const products: Array<IProduct> = await fetchProducts();

    dispatch({
      type: ActionTypes.FETCH_PRODUCTS,
      products: products,
    });
    dispatch({
      type: ActionTypes.IS_LOADING,
      isLoading: false,
    });
  }
};

export { deleteProduct };
