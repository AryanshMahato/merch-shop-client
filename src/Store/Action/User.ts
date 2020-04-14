import signIn from "../../Core/Auth/SignIn";
import ActionTypes from "./ActionTypes";
import { saveToken } from "../../Core/Auth/TokenHandlers/TokenHandlers";
import getUser from "../../Core/Auth/UserData";
import signUp from "../../Core/Auth/SignUp";

export function signInUser(email: string, password: string) {
  return async (dispatch: any) => {
    try {
      dispatch({ type: ActionTypes.IS_LOADING, isLoading: true });

      const user = await signIn(email, password);
      user.message = undefined;

      const authToken = user.token;
      await saveToken(authToken);

      user.token = undefined;

      dispatch({ type: ActionTypes.SIGN_IN, user, authenticated: true });
      dispatch({ type: ActionTypes.IS_LOADING, isLoading: false });
    } catch (e) {
      dispatch({ type: ActionTypes.IS_LOADING, isLoading: false });

      switch (e.response.data.message) {
        case "User not found":
          dispatch({
            type: ActionTypes.SIGN_IN_ERROR,
            signInError: {
              email: "Email not found!"
            },
            authenticated: false
          });
          break;
        case "Invalid Credentials":
          dispatch({
            type: ActionTypes.SIGN_IN_ERROR,
            signInError: {
              email: "Email password doesn't match",
              password: "Email password doesn't match"
            },
            authenticated: false
          });
          break;
        default:
          dispatch({
            type: ActionTypes.SIGN_IN_ERROR,
            signInError: {
              email: "Internal Server Error",
              password: "Internal Server Error"
            },
            authenticated: false
          });
      }
    }
  };
}

export function setSignInError(error: boolean) {
  return async (dispatch: any) => {
    if (error)
      dispatch({
        type: ActionTypes.SIGN_IN_ERROR,
        signInError: {
          email: "",
          password: ""
        }
      });
  };
}

export const signOutUser = () => (dispatch: any) => {
  localStorage.removeItem("AUTH_TOKEN");

  dispatch({ type: ActionTypes.IS_LOADING, isLoading: false });

  dispatch({ type: ActionTypes.SIGN_OUT });
};

export const getUserData = () => async (dispatch: any, getState: any) => {
  try {
    dispatch({ type: ActionTypes.IS_LOADING, isLoading: true });

    if (getState().user.authToken) {
      const response = await getUser(getState().user.authToken);
      const userData = response.data.user;

      dispatch({ type: ActionTypes.IS_LOADING, isLoading: false });
      dispatch({ type: ActionTypes.LOAD_USER, user: userData });
    }
  } catch (e) {
    if (e.response.message === "jwt expired") {
      dispatch({ type: ActionTypes.JWT_EXPIRED });
    }
    dispatch({ type: ActionTypes.IS_LOADING, isLoading: false });

    console.error(e.response);
  }
};

export const signUpUser = (
  name: string,
  email: string,
  password: string
) => async (dispatch: any) => {
  dispatch({ type: ActionTypes.IS_LOADING, isLoading: false });

  const user = await signUp(name, email, password);
  user.message = undefined;

  const authToken = user.token;
  await saveToken(authToken);

  user.token = undefined;

  dispatch({ type: ActionTypes.IS_LOADING, isLoading: false });
  dispatch({ type: ActionTypes.SIGN_UP, user, authenticated: true });
};
