import signIn from "../../Core/Auth/SignIn";
import ActionTypes from "./ActionTypes";

export function signInUser(email: string, password: string) {
  return async (dispatch: any) => {
    try {
      const user = await signIn(email, password);
      user.message = undefined;
      dispatch({ type: ActionTypes.SIGN_IN, user });
    } catch (e) {
      if (e === "User not found") {
        dispatch({
          type: ActionTypes.SIGN_IN_ERROR,
          signInError: {
            email: "Email not found!"
          }
        });
      }
    }
  };
}
