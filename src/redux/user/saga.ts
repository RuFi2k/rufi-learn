import { call, put, select, takeLatest } from "@redux-saga/core/effects";
import { actions } from ".";
import { IAction } from "../../types";
import { firebaseService } from "../rootSaga";
import { addCompleted, addLiked, setCompleted, setLiked } from "./actions";
import { app } from "../../services";
import { getLikedSelector } from "./selectors";
import { IThemeIdentifier } from "../../types/redux/user";

function* getLiked(action: IAction) {
  try {
    const id: string = action.data;
    const doc: { data: () => any } = yield call(
      firebaseService.firestore.getDocument,
      `users/${id}`
    );

    const paths = doc.data().favourites.map((x: { path: any }) => x.path)

    const result = paths.map((path: string) => {
      let theme, category, subcategory, rest;
      [rest, theme] = path.split('/themes/');
      [rest, subcategory] = rest.split('/subcategories/');
      [rest, category] = rest.split('/categories/');
      return {
        theme, subcategory, category,
      };
    });

    yield put(setLiked(result));
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

const likeReq = async (category: string, subcategory: string, theme: string, user: string) => {
  const userdoc: any = await app.firestore().doc(`users/${user}`).get();
  const response = await app.firestore().doc(`users/${user}`).set({
    favourites: [
      ...userdoc.data().favourites,
      app.firestore().doc(`${process.env.REACT_APP_FIRESTORE_ROOT_APP}/categories/${category}/subcategories/${subcategory}/themes/${theme}`)
    ],
  }, { merge: true });
  return response;
}

const dislikeReq = async (theme: string, user: string) => {
  const userdoc: any = await app.firestore().doc(`users/${user}`).get();
  const response = await app.firestore().doc(`users/${user}`).set({
    favourites: [
      ...userdoc.data().favourites.filter((x: any) => x.id !== theme),
    ],
  }, { merge: true });
  return response;
}

function* like(action: IAction) {
  try{
    const { category, subcategory, theme, user }: { [T: string]: string } = action.data;

    if(!user) {
      throw new Error('Unauthorized.');
    }

    yield call(likeReq, category, subcategory, theme, user);

    yield put(addLiked({
      theme, category, subcategory,
    }));
  } catch(e) {
    console.log(e.message);
  }
}

function* dislike(action: IAction) {
  try{
    const { theme, user }: { [T: string]: string } = action.data;
    const liked: IThemeIdentifier[] = yield select(getLikedSelector);
    if(!user) {
      throw new Error('Unauthorized.');
    }

    yield call(dislikeReq, theme, user);

    yield put(setLiked(liked.filter((x: IThemeIdentifier) => x.theme !== theme)));
  } catch(e) {
    console.log(e.message);
  }
}

const completeReq = async (category: string, subcategory: string, theme: string, user: string) => {
  const userdoc: any = await app.firestore().doc(`users/${user}`).get();
  const response = await app.firestore().doc(`users/${user}`).set({
    completed: [
      ...userdoc.data().favourites,
      app.firestore().doc(`${process.env.REACT_APP_FIRESTORE_ROOT_APP}/categories/${category}/subcategories/${subcategory}/themes/${theme}`)
    ],
  }, { merge: true });
  return response;
}

const uncompleteReq = async (theme: string, user: string) => {
  const userdoc: any = await app.firestore().doc(`users/${user}`).get();
  const response = await app.firestore().doc(`users/${user}`).set({
    completed: [
      ...userdoc.data().completed.filter((x: any) => x.id !== theme),
    ],
  }, { merge: true });
  return response;
}

function* complete(action: IAction) {
  try{
    const { category, subcategory, theme, user }: { [T: string]: string } = action.data;

    if(!user) {
      throw new Error('Unauthorized.');
    }

    yield call(completeReq, category, subcategory, theme, user);

    yield put(addCompleted(theme))
  } catch(e) {
    console.log(e.message);
  }
}

function* uncomplete(action: IAction) {
  try{
    const { theme, user }: { [T: string]: string } = action.data;
    const liked: string[] = yield select(getLikedSelector);
    if(!user) {
      throw new Error('Unauthorized.');
    }

    yield call(uncompleteReq, theme, user);

    yield put(setCompleted(liked.filter((x: string) => x !== theme)));
  } catch(e) {
    console.log(e.message);
  }
}

function* userSaga() {
  yield takeLatest(actions.GET_LIKED, getLiked);
  yield takeLatest(actions.GET_COMPLETED, getCompleted);
  yield takeLatest(actions.LIKE, like);
  yield takeLatest(actions.DISLIKE, dislike);
  yield takeLatest(actions.COMPLETE, complete);
  yield takeLatest(actions.UNCOMPLETE, uncomplete);
}

export default userSaga;
