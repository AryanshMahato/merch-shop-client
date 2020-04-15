import getCategoriesAPI from "../../Core/Category/getCategoriesAPI";
import ActionTypes from "./ActionTypes";

const getCategories = () => async (dispatch: any, getState: any) => {
  try {
    dispatch({ type: ActionTypes.IS_LOADING, isLoading: true });

    const response = await getCategoriesAPI(getState().user.authToken);

    dispatch({
      type: ActionTypes.GET_CATEGORIES,
      categories: response.data.categories
    });
    dispatch({ type: ActionTypes.IS_LOADING, isLoading: false });
  } catch (e) {
    console.log(e);
    dispatch({ type: ActionTypes.IS_LOADING, isLoading: false });
  }
};

export { getCategories };
