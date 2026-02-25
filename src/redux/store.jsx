import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import postReducer from "./postReducer";

const store = createStore(
  postReducer,
  applyMiddleware(thunk)
);

export default store;