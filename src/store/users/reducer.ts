import {
  FETCH_USERS_REQUEST,
  FETCH_USER_BY_ID_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  UserActionTypes,
  User,
} from "./types";

export interface UserState {
  users: User[];
  currentUser: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  currentUser: null,
  loading: true,
  error: null,
};

const userReducer = (
  state = initialState,
  action: UserActionTypes
): UserState => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        currentUser: null,
      };
    case FETCH_USER_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        currentUser: null,
      };
    case FETCH_USERS_SUCCESS:
      if (Array.isArray(action.payload)) {
        return {
          ...state,
          loading: false,
          users: action.payload,
          error: null,
        };
      } else {
        return {
          ...state,
          loading: false,
          currentUser: action.payload,
          error: null,
        };
      }
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        currentUser: null,
        users: [],
      };
    default:
      return state;
  }
};

export default userReducer;
