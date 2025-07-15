import { Action } from "redux";
import { User } from "../users/types";

export const ADD_FAVORITE = "favorites/ADD_FAVORITE";
export const REMOVE_FAVORITE = "favorites/REMOVE_FAVORITE";
export const SET_FAVORITES = "favorites/SET_FAVORITES";
export const LOAD_FAVORITES_REQUEST = "favorites/LOAD_FAVORITES_REQUEST";

export interface FavoritesState {
  users: User[];
}

export interface AddFavoriteAction extends Action {
  type: typeof ADD_FAVORITE;
  payload: User;
}

export interface RemoveFavoriteAction extends Action {
  type: typeof REMOVE_FAVORITE;
  payload: number;
}
export interface SetFavoritesAction extends Action {
  type: typeof SET_FAVORITES;
  payload: User[];
}
export interface LoadFavoritesAction extends Action {
  type: typeof LOAD_FAVORITES_REQUEST;
}

export type FavoritesActionTypes =
  | AddFavoriteAction
  | RemoveFavoriteAction
  | SetFavoritesAction
  | LoadFavoritesAction;
