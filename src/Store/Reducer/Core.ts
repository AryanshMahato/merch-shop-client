import ActionTypes from "../Action/ActionTypes";

const initialState = {
  error: "",
  isLoading: true,
  splashScreen: true
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
    case ActionTypes.SPLASH_SCREEN:
      return {
        ...state,
        splashScreen: action.splashScreen
      };
    default:
      return { ...state };
  }
};

export default coreReducer;
