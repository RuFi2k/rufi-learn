import { call, put, select, takeLatest } from "@redux-saga/core/effects";
import { actions } from ".";
import {
  IAction,
  ICategory,
  ICategoryResponse,
  ISubcategory,
  ISubcategoryResponse,
  IThemeIdentifier,
} from "../../types";
import { firebaseService } from "../rootSaga";
import { refreshStepperState } from "../stepper";
import { getLikedSelector } from "../user";
import {
  getCategoriesError,
  getCategoriesSuccess,
  getFavouriteCategoriesError,
  getFavouriteSubcategoriesError,
  getSubcategoriesError,
  getSubcategoriesSuccess,
  getThemeError,
  getThemesSuccess,
  getThemeSuccess,
} from "./actions";

function* getSubcategories(action: IAction) {
  try {
    const { data } = action;

    const snapshot: { docs: ISubcategoryResponse[] } = yield call(
      firebaseService.firestore.getCollection,
      `${process.env.REACT_APP_FIRESTORE_ROOT_APP}/categories/${data}/subcategories`
    );

    const subcategories = snapshot.docs.map(
      (doc: ISubcategoryResponse) =>
        ({
          ...doc.data(),
          id: doc.id,
          themes: [],
          themesLoading: false,
        } as ISubcategory)
    );

    yield put(
      getSubcategoriesSuccess({
        categoryId: data,
        subcategories,
      })
    );
  } catch (e) {
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
    const response = snapshot.docs.map(
      (doc: ICategoryResponse) =>
        ({
          ...doc.data(),
          subcategories: [],
          id: doc.id,
          subcategoriesLoading: false,
        } as ICategory)
    );

    yield put(getCategoriesSuccess(response));
  } catch (e) {
    console.log(e.message);
    yield put(getCategoriesError(e.message));
  }
}

function* getThemes(action: IAction) {
  try {
    const { categoryId, subcategoryId } = action.data;

    const snapshot: { docs: any[] } = yield call(
      firebaseService.firestore.getCollection,
      `${process.env.REACT_APP_FIRESTORE_ROOT_APP}/categories/${categoryId}/subcategories/${subcategoryId}/themes`
    );

    const response = snapshot.docs.map(
      (doc: { id: string; data: () => any }) => ({
        ...doc.data(),
        id: doc.id,
      })
    );

    yield put(
      getThemesSuccess({
        categoryId,
        subcategoryId,
        items: response,
      })
    );
  } catch (e) {
    console.log("getThemes", e.message);
  }
}

export function* getTheme(action: IAction) {
  try {
    const { category, subcategory, id } = action.data;
    const doc: { id: string; data: () => any } = yield call(
      firebaseService.firestore.getDocument,
      `${process.env.REACT_APP_FIRESTORE_ROOT_APP}/categories/${category}/subcategories/${subcategory}/themes/${id}`
    );

    console.log(doc.data());
    const response = {
      id: doc.id,
      ...doc.data(),
    };

    yield put(getThemeSuccess(response));
  } catch (e) {
    console.log(e.message);
    yield put(getThemeError(e.message));
  }
}

function* favouriteCategories() {
  try {
    const favourites: IThemeIdentifier[] = yield select(getLikedSelector);
    console.log(favourites);
    const favouriteCategories: string[] = favourites.map((x) => x.category);

    const snapshot: { docs: ICategoryResponse[] } = yield call(
      firebaseService.firestore.getCollection,
      `${process.env.REACT_APP_FIRESTORE_ROOT_APP}/categories`
    );
    const response = snapshot.docs.map(
      (doc: ICategoryResponse) =>
        ({
          ...doc.data(),
          subcategories: [],
          id: doc.id,
          subcategoriesLoading: false,
        } as ICategory)
    );

    yield put(
      getCategoriesSuccess(
        response.filter((x) => favouriteCategories.includes(x.id))
      )
    );
  } catch (e) {
    console.log(e.message);
    yield put(getFavouriteCategoriesError(e.message));
  }
}

function* favouriteSubcategories(action: IAction) {
  try {
    const favourites: IThemeIdentifier[] = yield select(getLikedSelector);

    const { data } = action;

    const favSubcategories = favourites
      .filter((x) => x.category === data)
      .map((x) => x.subcategory);

    const snapshot: { docs: ISubcategoryResponse[] } = yield call(
      firebaseService.firestore.getCollection,
      `${process.env.REACT_APP_FIRESTORE_ROOT_APP}/categories/${data}/subcategories`
    );

    const subcategories = snapshot.docs.map(
      (doc: ISubcategoryResponse) =>
        ({
          ...doc.data(),
          id: doc.id,
          themes: [],
          themesLoading: false,
        } as ISubcategory)
    );

    yield put(
      getSubcategoriesSuccess({
        categoryId: data,
        subcategories: subcategories.filter((x) =>
          favSubcategories.includes(x.id)
        ),
      })
    );
  } catch (e) {
    console.log(e.message);
    yield put(getFavouriteSubcategoriesError(e.message));
  }
}

function* favouriteThemes(action: IAction) {
  try {
    const favourites: IThemeIdentifier[] = yield select(getLikedSelector);
    const { categoryId, subcategoryId } = action.data;

    const favThemes = favourites
      .filter(
        (x) => x.category === categoryId && x.subcategory === subcategoryId
      )
      .map((x) => x.theme);

    const snapshot: { docs: any[] } = yield call(
      firebaseService.firestore.getCollection,
      `${process.env.REACT_APP_FIRESTORE_ROOT_APP}/categories/${categoryId}/subcategories/${subcategoryId}/themes`
    );

    const response = snapshot.docs.map(
      (doc: { id: string; data: () => any }) => ({
        ...doc.data(),
        id: doc.id,
      })
    );

    yield put(
      getThemesSuccess({
        categoryId,
        subcategoryId,
        items: response.filter((x) => favThemes.includes(x.id)),
      })
    );
  } catch (e) {
    console.log(e.message);
  }
}

function* createTheme(action: IAction) {
  try {
    const { category, subcategory, theme, history } = action.data;
    const response: { id: string } = yield call(
      firebaseService.firestore.addDocument,
      `${process.env.REACT_APP_FIRESTORE_ROOT_APP}/categories/${category}/subcategories/${subcategory}/themes`,
      theme
    );
    yield call(
      firebaseService.firestore.updateDocument,
      `${process.env.REACT_APP_FIRESTORE_ROOT_APP}/categories/${category}`,
      {
        lastModified: new Date().getTime(),
      }
    );
    yield put(refreshStepperState());
    history.push(`/details/${category}/${subcategory}/${response.id}`);
  } catch (e) {
    console.log(e.message);
  }
}

function* categoriesSaga() {
  yield takeLatest(actions.GET_CATEGORIES, getCategories);
  yield takeLatest(actions.GET_SUBCATEGORIES, getSubcategories);
  yield takeLatest(actions.GET_THEMES, getThemes);
  yield takeLatest(actions.GET_THEME, getTheme);
  yield takeLatest(actions.GET_FAVOURITE_CATEGORIES, favouriteCategories);
  yield takeLatest(actions.GET_FAVOURITE_SUBCATEGORIES, favouriteSubcategories);
  yield takeLatest(actions.GET_FAVOURITE_THEMES, favouriteThemes);
  yield takeLatest(actions.CREATE_THEME, createTheme);
}

export default categoriesSaga;
