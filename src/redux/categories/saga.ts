import { call, put, takeLatest } from "@redux-saga/core/effects";
import { actions } from ".";
import { firebaseService } from "../rootSaga";
import { getCategoriesError, getSubcategoriesError } from "./actions";

function* getSubcategories() {
  try {
    // console.log('categories');
    // const snapshot: { data: any } = yield call(
    //   firebaseService.firestore.getCollection,
    //   `${process.env.REACT_APP_FIRESTORE_ROOT_APP}/categories`
    // );
    // console.log(snapshot.data());
  } catch(e) {
    console.log(e.message);
    yield put(getSubcategoriesError(e.message));
  }
  yield 1;
}

function* getCategories() {
  try {
    const snapshot: { docs: any } = yield call(
      firebaseService.firestore.getCollection,
      `${process.env.REACT_APP_FIRESTORE_ROOT_APP}/categories`
    );
    const response = snapshot.docs.map((doc: any) => doc.data());
  } catch(e) {
    console.log(e.message);
    yield put(getCategoriesError(e.message));
  }
  yield 1;
}

function* categoriesSaga() {
  yield takeLatest(actions.GET_CATEGORIES, getCategories);
  yield takeLatest(actions.GET_SUBCATEGORIES, getSubcategories);
}

export default categoriesSaga;