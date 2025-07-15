import { Reducer } from "redux";
import {
  FavoritesState,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  SET_FAVORITES,
  FavoritesActionTypes,
} from "./types";

const initialState: FavoritesState = {
  users: [],
};

const favoritesReducer: Reducer<FavoritesState, FavoritesActionTypes> = (
  state = initialState,
  action
): FavoritesState => {
  switch (action.type) {
    case ADD_FAVORITE:
      if (!state.users.some((user) => user.id === action.payload.id)) {
        return {
          ...state,
          users: [...state.users, action.payload],
        };
      }
      return state;

    case REMOVE_FAVORITE:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };

    case SET_FAVORITES:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};

export default favoritesReducer;
