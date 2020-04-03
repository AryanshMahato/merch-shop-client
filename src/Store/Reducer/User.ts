import ActionTypes from "../Action/ActionTypes";

const initialState = {
  data: { name: "", email: "", _id: "" },
  token: "",
  signInError: {
    email: "",
    password: ""
  }
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SIGN_IN:
      return {
        ...state,
        ...action.user
      };
    case ActionTypes.SIGN_IN_ERROR:
      return {
        ...state,
        signInError: action.signInError
      };
    default:
      return { ...state };
  }
};

export default userReducer;
