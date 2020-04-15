import getCategoriesAPI from "../../Core/Category/getCategoriesAPI";
import ActionTypes from "./ActionTypes";
import newCategoryAPI from "../../Core/Category/newCategoryAPI";
import updateCategoryAPI from "../../Core/Category/updateCategoryAPI";

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

const createCategory = (category: string) => async (
  dispatch: any,
  getState: any
) => {
  try {
    dispatch({ type: ActionTypes.IS_LOADING, isLoading: true });

    const response = await newCategoryAPI(getState().user.authToken, category);

    if (response.status === 200) {
      const categoryResponse = await getCategoriesAPI(
        getState().user.authToken
      );

      dispatch({
        type: ActionTypes.GET_CATEGORIES,
        categories: categoryResponse.data.categories
      });
    }

    dispatch({ type: ActionTypes.IS_LOADING, isLoading: false });
  } catch (e) {
    console.log(e);
    dispatch({ type: ActionTypes.IS_LOADING, isLoading: false });
  }
};

const updateCategory = (id: string, category: string) => async (
  dispatch: any,
  getState: any
) => {
  try {
    dispatch({ type: ActionTypes.IS_LOADING, isLoading: true });

    const response = await updateCategoryAPI(
      getState().user.authToken,
      id,
      category
    );

    if (response.status === 200) {
      const categoryResponse = await getCategoriesAPI(
        getState().user.authToken
      );

      dispatch({
        type: ActionTypes.GET_CATEGORIES,
        categories: categoryResponse.data.categories
      });
    }

    dispatch({ type: ActionTypes.IS_LOADING, isLoading: false });
  } catch (e) {
    console.log(e);
    dispatch({ type: ActionTypes.IS_LOADING, isLoading: false });
  }
};

export { getCategories, createCategory, updateCategory };
