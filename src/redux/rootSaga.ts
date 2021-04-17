import { all } from "redux-saga/effects";
import ReduxSagaFirebase from "redux-saga-firebase";
import { AuthSaga } from "./auth";
import { CategoriesSaga } from './categories';
import { app } from "../services";

function* rootSaga(): any {
  yield all([
    AuthSaga(),
    CategoriesSaga(),
  ]);
}

export const firebaseService = new ReduxSagaFirebase(app);

export default rootSaga;
