import { Action } from "redux";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export interface FetchUsersRequestAction extends Action {
  type: typeof FETCH_USERS_REQUEST;
}

export interface FetchUsersSuccessAction extends Action {
  type: typeof FETCH_USERS_SUCCESS;
  payload: User[];
}

export interface FetchUsersFailureAction extends Action {
  type: typeof FETCH_USERS_FAILURE;
  payload: string;
}

export type UserActionTypes =
  | FetchUsersRequestAction
  | FetchUsersSuccessAction
  | FetchUsersFailureAction;

export interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}
