import { all, call, takeLatest, put, select } from "redux-saga/effects";

import { userActionTypes } from "./user.types";
import { toggleEditorViewer } from "../screen/screen.actions";
import { setCurrentUser } from "./user.actions";

export const getCurrentFile = state => state.user.currentFile;
export const getEmail = state => state.user.email;

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
    let res = yield fetch("http://localhost:3000/sign-in", {
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

export function* saveAndCompile() {
  const email = yield select(getEmail);
  const currentFile = yield select(getCurrentFile);
  const payload = {
    email,
    currentFile
  };
  yield put(toggleEditorViewer("viewer"));
  try {
    let res = yield fetch("http://localhost:3000/save-and-compile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    let user = yield res.json();
    yield put(setCurrentUser(user));
    yield put(toggleEditorViewer("both"));
  } catch (error) {
    console.error(error);
  }
}

export function* addFile({ folderRef }) {
  const email = yield select(getEmail);
  const payload = {
    email,
    folderRef
  };
  try {
    let res = yield fetch("http://localhost:3000/add-file", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    let user = yield res.json();
    yield put(setCurrentUser(user));
  } catch (error) {
    console.error(error);
  }
}

export function* changeFileName({ payload: { ref, newName } }) {
  const email = yield select(getEmail);
  const payload = {
    email,
    ref,
    newName
  };
  console.log(payload);
  try {
    let res = yield fetch("http://localhost:3000/change-file-name", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    let user = yield res.json();
    yield put(setCurrentUser(user));
  } catch (error) {
    console.error(error);
  }
}

export function* onSignInStart() {
  yield takeLatest(userActionTypes.SIGN_IN_START, fetchUser);
}

export function* onSignInDefaultStart() {
  yield takeLatest(userActionTypes.SIGN_IN_DEFAULT_START, fetchDefaultUser);
}

export function* onSaveTextToFile() {
  yield takeLatest(userActionTypes.SAVE_TEXT_TO_FILE, saveAndCompile);
}

export function* onAddFile() {
  yield takeLatest(userActionTypes.ADD_FILE, addFile);
}

export function* onChangeFileName() {
  yield takeLatest(userActionTypes.CHANGE_FILE_NAME, changeFileName);
}

export function* userSagas() {
  yield all([
    call(onSignInDefaultStart),
    call(onSignInStart),
    call(onSaveTextToFile),
    call(onAddFile),
    call(onChangeFileName)
  ]);
}
