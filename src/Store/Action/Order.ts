import { purchase } from "../../Core/Payment/purchase";
import ActionTypes from "./ActionTypes";

const purchaseCart = (token: any) => async (dispatch: any, getState: any) => {
  try {
    const response = await purchase(token, getState().user.authToken);

    dispatch({ type: ActionTypes.CLEAR_CART });
    console.log(response);
  } catch (e) {
    console.log(e.response);
  }
};

export { purchaseCart };
