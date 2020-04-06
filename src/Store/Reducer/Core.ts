import ActionTypes from "../Action/ActionTypes";

const initialState = {
  error: "",
  isLoading: false
};

const coreReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.error
      };
    case ActionTypes.IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    default:
      return { ...state };
  }
};

export default coreReducer;
