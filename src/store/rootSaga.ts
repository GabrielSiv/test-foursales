import { all, AllEffect, fork, ForkEffect } from "redux-saga/effects";
import { userSaga } from "./users/sagas";

export default function* rootSaga(): Generator<
  AllEffect<ForkEffect>,
  void,
  unknown
> {
  yield all([fork(userSaga)]);
}
