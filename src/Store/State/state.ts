import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import productReducer from "../Reducer/Product";
import thunk from "redux-thunk";
import coreReducer from "../Reducer/Core";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const state = createStore(
  combineReducers({ product: productReducer, core: coreReducer }),
  composeEnhancers(applyMiddleware(thunk))
);

export default state;
