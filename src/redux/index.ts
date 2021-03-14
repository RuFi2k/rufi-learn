import { combineReducers, createStore, compose } from "redux";
import { navbar } from "./navbar";

const rootReducer = combineReducers({
  navbar,
});

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers());

export default store;
