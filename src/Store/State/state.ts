import { applyMiddleware, createStore } from "redux";
import reducer from "../Reducer/Product";
import thunk from "redux-thunk";

const state = createStore(reducer, applyMiddleware(thunk));

export default state;
