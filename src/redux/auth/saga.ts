import { call, put, takeLatest } from "@redux-saga/core/effects";
import { actions } from ".";
import { Error, IAction } from "../../types";
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
  } catch (e: unknown) {
    yield put(loginActionError((e as Error).message));
  }
}

function* logout(): any {
  yield call(firebaseService.auth.signOut);
}

function* register(action: IAction): any {
  const { email, password } = action.data;
  const user = yield call(
    firebaseService.auth.createUserWithEmailAndPassword,
    email,
    password
  );

  yield call(
    firebaseService.firestore.setDocument,
    `users/${user.user.uid}`,
    {
      email,
      completed: [],
      favourites: [],
      watched: [],
    },
    {}
  );
}

function* AuthSaga(): any {
  yield takeLatest(actions.LOGIN_ACTION, login);
  yield takeLatest(actions.LOGOUT_ACTION, logout);
  yield takeLatest(actions.REGISTER_ACTION, register);
}

export default AuthSaga;
