import ActionTypes from "../Action/ActionTypes";

const initialState = {
  categories: []
};

const categoryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.GET_CATEGORIES:
      return {
        ...state,
        categories: action.categories
      };
    default:
      return { ...state };
  }
};

export default categoryReducer;
