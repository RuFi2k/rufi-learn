import { combineReducers, createStore, compose } from "redux";
import { navbar } from "./navbar";
import { stepper } from "./stepper";

export const rootReducer = combineReducers({
  navbar,
  stepper,
});

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers());

export default store;
