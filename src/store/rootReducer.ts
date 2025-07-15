import { combineReducers } from "redux";
import userReducer from "./users/reducer";
import favoritesReducer from "./favorites/reducer";

const rootReducer = combineReducers({
  users: userReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
