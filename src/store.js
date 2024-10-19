import { createStore } from "redux";
import { combineReducers, compose, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import {
  todosReducer,
  searchValueReducer,
  refreshTodosFlagReducer,
} from "./reducers";

const reducer = combineReducers({
  todosState: todosReducer,
  searchValueState: searchValueReducer,
  refreshTodosFlagState: refreshTodosFlagReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
