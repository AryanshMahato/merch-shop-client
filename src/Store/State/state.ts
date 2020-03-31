import { applyMiddleware, compose, createStore } from "redux";
import reducer from "../Reducer/Product";
import thunk from "redux-thunk";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const state = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default state;
