import ActionTypes from "../Action/ActionTypes";

const initialState = {
  success: false,
  purchaseCompleted: false,
  products: []
};

const ordersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.PURCHASE:
      return {
        ...state,
        purchaseCompleted: true,
        success: action.success,
        products: [...action.products]
      };

    default:
      return { ...state };
  }
};

export default ordersReducer;
