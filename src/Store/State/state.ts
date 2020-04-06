import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import productReducer from "../Reducer/Product";
import thunk from "redux-thunk";
import coreReducer from "../Reducer/Core";
import userReducer from "../Reducer/User";
import cartReducer from "../Reducer/Cart";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const state = createStore(
  combineReducers({
    product: productReducer,
    core: coreReducer,
    user: userReducer,
    cart: cartReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default state;
