import { call, put, takeLatest } from "@redux-saga/core/effects";
import { actions } from ".";
import { IAction } from "../../types";
import { firebaseService } from "../rootSaga";
import { loginActionError, loginActionSuccess } from "./actions";

function* login(action: IAction): any {
  try {
    const { email, password, history } = action.data;
    const userCredential = yield call(
      firebaseService.auth.signInWithEmailAndPassword,
      email,
      password
    );

    yield put(loginActionSuccess(userCredential));
    history.push("/explore");
  } catch (e) {
    console.log("login failed", e.message);
    yield put(loginActionError(e.message));
  }
}

function* logout(): any {
  try {
    yield call(firebaseService.auth.signOut);
  } catch (e) {
    console.log(e.message);
  }
}

function* register(action: IAction): any {
  try{
    const { email, password } = action.data;
    const user = yield call(firebaseService.auth.createUserWithEmailAndPassword, email, password);
    console.log('user', user);

    yield call(
      firebaseService.firestore.setDocument,
      `users/${user.user.uid}`,
      {
        email,
        completed: [],
        favourites: [],
        watched: [],
      },
      {},
    );
  } catch(e) {
    console.log(e.message);
  }
}

function* AuthSaga(): any {
  yield takeLatest(actions.LOGIN_ACTION, login);
  yield takeLatest(actions.LOGOUT_ACTION, logout);
  yield takeLatest(actions.REGISTER_ACTION, register);
}

export default AuthSaga;
