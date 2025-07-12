import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  User,
  UserActionTypes,
} from "./types";

export const fetchUsersRequest = (): UserActionTypes => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (users: User[]): UserActionTypes => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = (error: string): UserActionTypes => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});
