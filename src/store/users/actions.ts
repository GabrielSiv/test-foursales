import {
  FETCH_USERS_REQUEST,
  FETCH_USER_BY_ID_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  User,
  UserActionTypes,
} from "./types";

export const fetchUsersRequest = (): UserActionTypes =>
  ({
    type: FETCH_USERS_REQUEST,
  } as const);

export const fetchUserByIdRequest = (userId: string): UserActionTypes =>
  ({
    type: FETCH_USER_BY_ID_REQUEST,
    payload: userId,
  } as const);

export const fetchUsersSuccess = (
  userOrUsers: User | User[]
): UserActionTypes =>
  ({
    type: FETCH_USERS_SUCCESS,
    payload: userOrUsers,
  } as const);

export const fetchUsersFailure = (error: string): UserActionTypes =>
  ({
    type: FETCH_USERS_FAILURE,
    payload: error,
  } as const);
