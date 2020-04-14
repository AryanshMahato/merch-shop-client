import { purchase } from "../../Core/Payment/purchase";
import ActionTypes from "./ActionTypes";
import clearCart from "../../Core/Cart/clearCart";
import getOrdersFromAPI from "../../Core/Orders/getOrders";

const purchaseCart = (token: any) => async (dispatch: any, getState: any) => {
  try {
    dispatch({ type: ActionTypes.IS_LOADING, isLoading: true });

    const response = await purchase(token, getState().user.authToken);

    await clearCart(getState().user.authToken);

    dispatch({ type: ActionTypes.IS_LOADING, isLoading: false });
    dispatch({ type: ActionTypes.CLEAR_CART });
    dispatch({
      type: ActionTypes.PURCHASE,
      success: true,
      products: response.data.order.products
    });
  } catch (e) {
    dispatch({
      type: ActionTypes.PURCHASE,
      success: false,
      products: e.response.products
    });
    dispatch({ type: ActionTypes.IS_LOADING, isLoading: false });
  }
};

const getOrders = () => async (dispatch: any, getState: any) => {
  try {
    dispatch({ type: ActionTypes.IS_LOADING, isLoading: true });

    const response = await getOrdersFromAPI(getState().user.authToken);

    dispatch({ type: ActionTypes.IS_LOADING, isLoading: false });
    dispatch({
      type: ActionTypes.GET_ORDERS,
      products: response.data.products
    });
  } catch (e) {
    dispatch({ type: ActionTypes.IS_LOADING, isLoading: false });

    console.log(e);
  }
};

export { purchaseCart, getOrders };
