import {
  call,
  put,
  takeEvery,
  CallEffect,
  PutEffect,
} from "redux-saga/effects";
import axios, { AxiosError, AxiosResponse } from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USER_BY_ID_REQUEST,
  User,
  FetchUserByIdRequestAction,
} from "./types";
import { fetchUsersSuccess, fetchUsersFailure } from "./actions";

function isAxiosError(error: unknown): error is AxiosError {
  return (error as AxiosError).isAxiosError !== undefined;
}

function* fetchUsersSaga(): Generator<CallEffect | PutEffect, void, unknown> {
  try {
    const response = (yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/users"
    )) as AxiosResponse<User[]>;
    const users = response.data;
    yield put(fetchUsersSuccess(users));
  } catch (error: unknown) {
    let errorMessage = "An unknown error occurred while loading users.";

    if (isAxiosError(error)) {
      if (
        error.response?.data &&
        typeof error.response.data === "object" &&
        "message" in error.response.data
      ) {
        errorMessage = (error.response.data as { message: string }).message;
      } else if (error.message) {
        errorMessage = error.message;
      } else if (error.request) {
        errorMessage = "Network error: No response from server.";
      } else {
        errorMessage = "Axios request error.";
      }
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }

    yield put(fetchUsersFailure(errorMessage));
  }
}

function* fetchUserByIdSaga(
  action: FetchUserByIdRequestAction
): Generator<CallEffect | PutEffect, void, unknown> {
  try {
    const userId = action.payload;
    const response = (yield call(
      axios.get,
      `https://jsonplaceholder.typicode.com/users/${userId}`
    )) as AxiosResponse<User>;
    const user = response.data;
    yield put(fetchUsersSuccess(user));
  } catch (error: unknown) {
    let errorMessage =
      "An unknown error occurred while loading the user by ID.";

    if (isAxiosError(error)) {
      if (error.response?.status === 404) {
        errorMessage = `User with ID ${action.payload} not found.`;
      } else if (
        error.response?.data &&
        typeof error.response.data === "object" &&
        "message" in error.response.data
      ) {
        errorMessage = (error.response.data as { message: string }).message;
      } else if (error.message) {
        errorMessage = error.message;
      } else if (error.request) {
        errorMessage = "Network error: No response from server.";
      } else {
        errorMessage = "Axios request error.";
      }
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }

    yield put(fetchUsersFailure(errorMessage));
  }
}

export function* userSaga(): Generator<any, void, unknown> {
  yield takeEvery(FETCH_USERS_REQUEST, fetchUsersSaga);
  yield takeEvery(FETCH_USER_BY_ID_REQUEST, fetchUserByIdSaga);
}
