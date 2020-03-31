import ActionTypes from "../Action/ActionTypes";

const initialState = {
  products: []
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.products };
    default:
      return { ...state };
  }
};

export default reducer;
