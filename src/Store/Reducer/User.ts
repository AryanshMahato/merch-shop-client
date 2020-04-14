import ActionTypes from "../Action/ActionTypes";
import { getToken } from "../../Core/Auth/TokenHandlers/TokenHandlers";

const initialState = {
  data: { name: "", email: "", _id: "" },
  authenticated: false,
  jwtExpired: false,
  signInError: {
    email: "",
    password: ""
  },
  signUpError: {
    name: "",
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
        authToken: getToken(),
        authenticated: action.authenticated,
        jwtExpired: false
      };
    case ActionTypes.SIGN_IN_ERROR:
      return {
        ...state,
        authToken: getToken(),
        signInError: action.signInError,
        authenticated: action.authenticated
      };
    case ActionTypes.LOAD_USER:
      return {
        ...state,
        authToken: getToken(),
        data: action.user,
        authenticated: true
      };
    case ActionTypes.SIGN_OUT:
      return {
        ...state,
        authToken: getToken(),
        authenticated: false
      };
    case ActionTypes.SIGN_UP:
      return {
        ...state,
        authToken: getToken(),
        data: { ...action.user },
        authenticated: true,
        jwtExpired: false
      };
    case ActionTypes.SIGN_UP_ERROR:
      return {
        ...state,
        authToken: getToken(),
        signUpError: action.signUpError,
        authenticated: action.authenticated
      };
    case ActionTypes.JWT_EXPIRED:
      return {
        ...state,
        jwtExpired: true,
        authToken: ""
      };

    default:
      return { ...state };
  }
};

export default userReducer;
