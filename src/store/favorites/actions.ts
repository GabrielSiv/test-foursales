import { User } from "../users/types";
import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  SET_FAVORITES,
  LOAD_FAVORITES_REQUEST,
} from "./types";

export const addFavorite = (user: User) => ({
  type: ADD_FAVORITE,
  payload: user,
});

export const removeFavorite = (userId: number) => ({
  type: REMOVE_FAVORITE,
  payload: userId,
});

export const setFavorites = (users: User[]) => ({
  type: SET_FAVORITES,
  payload: users,
});

export const loadFavoritesRequest = () => ({
  type: LOAD_FAVORITES_REQUEST,
});
