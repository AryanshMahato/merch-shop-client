import ActionTypes from "./ActionTypes";
import fetchCart from "../../Core/Cart/fetchCart";

export const getCart = () => async (dispatch: any, getState: any) => {
  try {
    if (getState().user.authToken) {
      const response = await fetchCart(getState().user.authToken);
      const products = response.data.cart.products;

      dispatch({ type: ActionTypes.GET_CART, products: products });
    }
  } catch (e) {
    console.error(e.response);
  }
};
