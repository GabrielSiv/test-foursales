import {
  call,
  put,
  takeEvery,
  select,
  CallEffect,
  PutEffect,
  SelectEffect,
} from "redux-saga/effects";
import { ADD_FAVORITE, REMOVE_FAVORITE, LOAD_FAVORITES_REQUEST } from "./types";
import { setFavorites } from "./actions";
import { RootState } from "../index";
import { User } from "../users/types";

const saveFavoritesToLocalStorage = (favorites: User[]) => {
  try {
    localStorage.setItem("favoriteUsers", JSON.stringify(favorites));
  } catch (e: unknown) {
    console.error("Failed to save favorites to local storage", e);
  }
};

const loadFavoritesFromLocalStorage = (): User[] => {
  try {
    const serializedFavorites = localStorage.getItem("favoriteUsers");
    if (serializedFavorites === null) {
      return [];
    }
    return JSON.parse(serializedFavorites) as User[];
  } catch (e: unknown) {
    console.error("Failed to load favorites from local storage", e);
    return [];
  }
};

function* saveFavoritesSaga(): Generator<
  SelectEffect | CallEffect,
  void,
  unknown
> {
  const favorites: User[] = (yield select(
    (state: RootState) => state.favorites.users
  )) as User[];

  yield call(saveFavoritesToLocalStorage, favorites);
}

function* loadFavoritesSaga(): Generator<
  CallEffect | PutEffect,
  void,
  unknown
> {
  const favorites: User[] = (yield call(
    loadFavoritesFromLocalStorage
  )) as User[];
  yield put(setFavorites(favorites));
}

export function* favoritesSaga(): Generator<any, void, unknown> {
  yield takeEvery([ADD_FAVORITE, REMOVE_FAVORITE], saveFavoritesSaga);
  yield takeEvery(LOAD_FAVORITES_REQUEST, loadFavoritesSaga);
}
