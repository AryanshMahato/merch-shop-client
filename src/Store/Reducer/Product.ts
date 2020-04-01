import ActionTypes from "../Action/ActionTypes";

const initialState = {
  products: []
};

const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.FETCH_PRODUCT:
      return { ...state, products: action.products };
    default:
      return { ...state };
  }
};

export default productReducer;
