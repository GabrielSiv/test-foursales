import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./users/reducer";
import favoritesReducer from "./favorites/reducer";
import filterReducer from "./filter/reducer";

const rootReducer = combineReducers({
  users: userReducer,
  favorites: favoritesReducer,
  filter: filterReducer,
});

export default rootReducer;
