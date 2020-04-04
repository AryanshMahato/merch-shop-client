import ActionTypes from "../Action/ActionTypes";
import { getToken } from "../../Core/Auth/TokenHandlers/TokenHandlers";

const initialState = {
  data: { name: "", email: "", _id: "" },
  authenticated: false,
  signInError: {
    email: "",
    password: ""
  },
  authToken: getToken()
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SIGN_IN:
      return {
        ...state,
        ...action.user,
        authenticated: action.authenticated
      };
    case ActionTypes.SIGN_IN_ERROR:
      return {
        ...state,
        signInError: action.signInError,
        authenticated: action.authenticated
      };
    case ActionTypes.LOAD_USER:
      return {
        ...state,
        data: action.user,
        authenticated: true
      };
    default:
      return { ...state };
  }
};

export default userReducer;
