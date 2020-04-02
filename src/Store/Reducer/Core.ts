import ActionTypes from "../Action/ActionTypes";

const initialState = {
  error: ""
};

const coreReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.error
      };
    default:
      return { ...state };
  }
};

export default coreReducer;
