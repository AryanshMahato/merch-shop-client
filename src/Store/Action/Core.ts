import ActionTypes from "./ActionTypes";

export const setSplashScreen = (status: boolean) => (dispatch: any) => {
  dispatch({ type: ActionTypes.SPLASH_SCREEN, splashScreen: status });
};
