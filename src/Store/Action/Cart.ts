import ActionTypes from "./ActionTypes";
import fetchCart from "../../Core/Cart/fetchCart";
import removeItemFromCart from "../../Core/Cart/removeItemFromCart";
import addItemToCart from "../../Core/Cart/addItemToCart";

export const getCart = () => async (dispatch: any, getState: any) => {
  try {
    console.log("hi");
    if (getState().user.authToken) {
      const response = await fetchCart(getState().user.authToken);
      const products = response.data.cart.products;

      dispatch({ type: ActionTypes.GET_CART, products: products });
    }
  } catch (e) {
    console.error(e.response);
  }
};

export const addToCart = (productId: string) => async (
  dispatch: any,
  getState: any
) => {
  try {
    const response = await addItemToCart(getState().user.authToken, productId);

    if (response.status === 200) {
      const response = await fetchCart(getState().user.authToken);
      const products = response.data.cart.products;

      dispatch({ type: ActionTypes.GET_CART, products: products });
    }
  } catch (e) {
    console.log(e.response.data);
    dispatch({ type: ActionTypes.SET_ERROR, error: "Some Error Occurred" });
  }
};
export const deleteItemInCart = (productId: string) => async (
  dispatch: any,
  getState: any
) => {
  try {
    const response = await removeItemFromCart(
      getState().user.authToken,
      productId
    );
    if (response.status === 200) {
      const response = await fetchCart(getState().user.authToken);
      const products = response.data.cart.products;
      dispatch({ type: ActionTypes.GET_CART, products: products });
    } else {
      dispatch({ type: ActionTypes.SET_ERROR, error: "Some Error Occurred" });
    }
  } catch (e) {
    console.log(e);
    dispatch({ type: ActionTypes.SET_ERROR, error: "Some Error Occurred" });
  }
};
