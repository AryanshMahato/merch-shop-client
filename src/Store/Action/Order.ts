import { purchase } from "../../Core/Payment/purchase";
import ActionTypes from "./ActionTypes";
import clearCart from "../../Core/Cart/clearCart";

const purchaseCart = (token: any) => async (dispatch: any, getState: any) => {
  try {
    dispatch({ type: ActionTypes.IS_LOADING, isLoading: true });

    await purchase(token, getState().user.authToken);

    await clearCart(getState().user.authToken);

    dispatch({ type: ActionTypes.IS_LOADING, isLoading: false });
    dispatch({ type: ActionTypes.CLEAR_CART });
    dispatch({ type: ActionTypes.PURCHASE, status: "success" });
  } catch (e) {
    dispatch({ type: ActionTypes.PURCHASE, status: "failed" });
    dispatch({ type: ActionTypes.IS_LOADING, isLoading: false });
  }
};

export { purchaseCart };
