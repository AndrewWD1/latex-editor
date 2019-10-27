import { all, call, takeLatest, put } from "redux-saga/effects";

import { userActionTypes } from "./user.types";
import { setCurrentUser } from "./user.actions";

export function* fetchDefaultUser() {
  try {
    let res = yield fetch("http://localhost:3000/testuser", {
      method: "GET"
    });
    let user = yield res.json();
    yield put(setCurrentUser(user));
  } catch (error) {
    console.log(error);
  }
}

export function* fetchUser({ payload }) {
  try {
    let res = yield fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    let user = yield res.json();
    yield put(setCurrentUser(user));
  } catch (error) {
    console.log(error);
  }
}

export function* onSignInStart() {
  yield takeLatest(userActionTypes.SIGN_IN_START, fetchUser);
}

export function* onSignInDefaultStart() {
  yield takeLatest(userActionTypes.SIGN_IN_DEFAULT_START, fetchDefaultUser);
}

export function* userSagas() {
  yield all([call(onSignInDefaultStart), call(onSignInStart)]);
}
