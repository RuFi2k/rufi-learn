import { all } from "redux-saga/effects";
import ReduxSagaFirebase from "redux-saga-firebase";
import { AuthSaga } from "./auth";
import { CategoriesSaga } from "./categories";
import { app } from "../services";
import { UserSaga } from "./user";

function* rootSaga(): any {
  yield all([AuthSaga(), CategoriesSaga(), UserSaga()]);
}

export const firebaseService = new ReduxSagaFirebase(app);

export default rootSaga;
