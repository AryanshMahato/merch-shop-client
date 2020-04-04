import signIn from "../../Core/Auth/SignIn";
import ActionTypes from "./ActionTypes";
import { saveToken } from "../../Core/Auth/TokenHandlers/TokenHandlers";

export function signInUser(email: string, password: string) {
  return async (dispatch: any) => {
    try {
      const user = await signIn(email, password);
      user.message = undefined;

      const authToken = user.token;
      await saveToken(authToken);

      user.token = undefined;

      dispatch({ type: ActionTypes.SIGN_IN, user, authenticated: true });
    } catch (e) {
      if (e.response.data.message === "User not found") {
        dispatch({
          type: ActionTypes.SIGN_IN_ERROR,
          signInError: {
            email: "Email not found!"
          },
          authenticated: false
        });
      } else if (e.response.data.message === "Invalid Credentials") {
        dispatch({
          type: ActionTypes.SIGN_IN_ERROR,
          signInError: {
            email: "Email password doesn't match",
            password: "Email password doesn't match"
          },
          authenticated: false
        });
      } else {
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
