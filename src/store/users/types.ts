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
export const FETCH_USER_BY_ID_REQUEST = "FETCH_USER_BY_ID_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export interface FetchUsersRequestAction {
  type: typeof FETCH_USERS_REQUEST;
}

export interface FetchUserByIdRequestAction {
  type: typeof FETCH_USER_BY_ID_REQUEST;
  payload: string;
}

export interface FetchUsersSuccessAction {
  type: typeof FETCH_USERS_SUCCESS;
  payload: User | User[];
}

export interface FetchUsersFailureAction {
  type: typeof FETCH_USERS_FAILURE;
  payload: string;
}

export type UserActionTypes =
  | FetchUsersRequestAction
  | FetchUserByIdRequestAction
  | FetchUsersSuccessAction
  | FetchUsersFailureAction;
