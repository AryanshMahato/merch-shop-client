import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import productReducer from "../Reducer/Product";
import thunk from "redux-thunk";
import coreReducer from "../Reducer/Core";
import userReducer from "../Reducer/User";
import cartReducer from "../Reducer/Cart";
import ActionTypes from "../Action/ActionTypes";
import ordersReducer from "../Reducer/Orders";
import categoryReducer from "../Reducer/Category";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let appReducers = combineReducers({
  product: productReducer,
  core: coreReducer,
  user: userReducer,
  cart: cartReducer,
  orders: ordersReducer,
  category: categoryReducer
});

const rootReducer = (state: any, action: any) => {
  if (action.type === ActionTypes.SIGN_OUT) {
    state = { product: state.product };
  }
  return appReducers(state, action);
};

const state = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default state;
