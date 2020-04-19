import ActionTypes from "./ActionTypes";
import deleteProductAPI from "../../Core/AdminProduct/deleteProductAPI";
import fetchProducts from "../../Core/Product/fetchProducts";
import { IProduct } from "../../../types/Store";
import addProductAPI from "../../Core/AdminProduct/addProductAPI";
import editProductAPI from "../../Core/AdminProduct/editProductAPI";

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

const editProduct = (
  id: string,
  product: any
) => async (dispatch: any, getState: any) => {
  try {
    dispatch({
      type: ActionTypes.IS_LOADING,
      isLoading: true,
    });

    if (getState().user.authToken) {
      await editProductAPI(
        getState().user.authToken,
        id,
        product
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
  } catch (e) {
    console.error(e.response);
    dispatch({
      type: ActionTypes.IS_LOADING,
      isLoading: false,
    });
  }
};

const addProduct = (product: IProduct) => async (
  dispatch: any,
  getState: any
) => {
  try {
    dispatch({
      type: ActionTypes.IS_LOADING,
      isLoading: true,
    });

    if (getState().user.authToken) {
      await addProductAPI(
        getState().user.authToken,
        product
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
  } catch (e) {
    console.error(e.response);
    dispatch({
      type: ActionTypes.IS_LOADING,
      isLoading: false,
    });
  }
};

export { deleteProduct, addProduct, editProduct };
