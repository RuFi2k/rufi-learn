import { call, put, takeLatest } from "@redux-saga/core/effects";
import { actions } from ".";
import { IAction } from "../../types";
import { firebaseService } from "../rootSaga";
import { setCompleted, setLiked } from "./actions";

function* getLiked(action: IAction) {
  try {
    const id: string = action.data;
    const doc: { data: () => any } = yield call(
      firebaseService.firestore.getDocument,
      `users/${id}`
    );
    // const reg = new RegExp("^[^_]*themes/");
    const response: string[] = doc
      .data()
      .completed.map((x: { id: string }) => x.id);
    // const response = doc.data().favourites.map((x: string) => x.replace(reg, ''))

    yield put(setLiked(response));
  } catch (e) {
    console.log(e.message);
  }
}

function* getCompleted(action: IAction) {
  try {
    const id: string = action.data;
    const doc: { data: () => any } = yield call(
      firebaseService.firestore.getDocument,
      `users/${id}`
    );
    const response: string[] = doc
      .data()
      .completed.map((x: { id: string }) => x.id);

    yield put(setCompleted(response));
  } catch (e) {
    console.log(e.message);
  }
}

function* userSaga() {
  yield takeLatest(actions.GET_LIKED, getLiked);
  yield takeLatest(actions.GET_COMPLETED, getCompleted);
}

export default userSaga;
