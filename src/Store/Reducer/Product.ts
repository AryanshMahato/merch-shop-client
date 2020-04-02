import ActionTypes from "../Action/ActionTypes";

const initialState = {
  products: [],
  product: {}
};

const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, products: action.products };
    case ActionTypes.FETCH_PRODUCT:
      return { ...state, product: action.product };
    default:
      return { ...state };
  }
};

export default productReducer;
