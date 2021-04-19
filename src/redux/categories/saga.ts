import { call, put, takeLatest } from "@redux-saga/core/effects";
import { actions } from ".";
import { IAction, ICategory, ICategoryResponse, ISubcategory, ISubcategoryResponse } from "../../types";
import { firebaseService } from "../rootSaga";
import { getCategoriesError, getCategoriesSuccess, getSubcategoriesError, getSubcategoriesSuccess, getThemesSuccess } from "./actions";

function* getSubcategories(action: IAction) {
  try {
    const { data } = action;

    const snapshot: { docs: ISubcategoryResponse[] } = yield call(
      firebaseService.firestore.getCollection,
      `${process.env.REACT_APP_FIRESTORE_ROOT_APP}/categories/${data}/subcategories`
    );

    const subcategories = snapshot.docs.map((doc: ISubcategoryResponse) => ({
      ...doc.data(),
      id: doc.id,
      themes: [],
      themesLoading: false,
    } as ISubcategory));

    yield put(getSubcategoriesSuccess({
      categoryId: data,
      subcategories,
    }));
  } catch(e) {
    console.log(e.message);
    yield put(getSubcategoriesError(e.message));
  }
}

function* getCategories() {
  try {
    const snapshot: { docs: ICategoryResponse[] } = yield call(
      firebaseService.firestore.getCollection,
      `${process.env.REACT_APP_FIRESTORE_ROOT_APP}/categories`
    );
    const response = snapshot.docs.map((doc: ICategoryResponse) => ({
      ...doc.data(),
      subcategories: [],
      id: doc.id,
      subcategoriesLoading: false,
    } as ICategory));
    
    yield put(getCategoriesSuccess(response));
  } catch(e) {
    console.log(e.message);
    yield put(getCategoriesError(e.message));
  }
}

function* getThemes(action: IAction) {
  try{
    const { categoryId, subcategoryId } = action.data;

    const snapshot: { docs: any[] } = yield call(
      firebaseService.firestore.getCollection,
      `${process.env.REACT_APP_FIRESTORE_ROOT_APP}/categories/${categoryId}/subcategories/${subcategoryId}/themes`
    );

    const response = snapshot.docs.map((doc: { data: () => any }) => ({
      ...doc.data(),
    }));

    console.log('response', response);

    yield put(getThemesSuccess({
      categoryId,
      subcategoryId,
      items: response,
    }))
  } catch(e) {
    console.log('getThemes', e.message);
  }
  yield 1;
}

function* categoriesSaga() {
  yield takeLatest(actions.GET_CATEGORIES, getCategories);
  yield takeLatest(actions.GET_SUBCATEGORIES, getSubcategories);
  yield takeLatest(actions.GET_THEMES, getThemes);
}

export default categoriesSaga;