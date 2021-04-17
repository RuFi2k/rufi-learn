import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { navbar } from "./navbar";
import { stepper } from "./stepper";
import { auth } from "./auth";
import rootSaga from "./rootSaga";

export const rootReducer = combineReducers({
  navbar,
  stepper,
  auth,
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
export { firebaseService } from "./rootSaga";
