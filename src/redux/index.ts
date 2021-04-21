import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { navbar } from "./navbar";
import { stepper } from "./stepper";
import { auth } from "./auth";
import { categories } from './categories';
import { user } from './user';
import rootSaga from "./rootSaga";

export const rootReducer = combineReducers({
  navbar,
  stepper,
  auth,
  categories,
  user,
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
