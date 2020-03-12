import { combineReducers, createStore, applyMiddleware } from "redux";
import { reducer as formReducer } from "redux-form";
import UserData from "./UserData";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  UserData: UserData,
  form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
