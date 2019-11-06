import { all, call, takeLatest, put, select } from "redux-saga/effects";

import { userActionTypes } from "./user.types";
import { toggleEditorViewer } from "../screen/screen.actions";
import { setCurrentUser } from "./user.actions";

export const getCurrentFile = state => state.user.currentFile;
export const getEmail = state => state.user.email;

export function* fetchDefaultUser() {
  try {
    let res = yield fetch("https://thelatexeditor.com/testuser", {
      method: "GET"
    });
    let user = yield res.json();
    yield put(setCurrentUser(user));
  } catch (error) {}
}

export function* fetchUser({ payload }) {
  try {
    let res = yield fetch("https://thelatexeditor.com/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    let user = yield res.json();
    yield put(setCurrentUser(user));
  } catch (error) {}
}

export function* register({ payload }) {
  const { email, password } = payload;

  try {
    if (!email || !password) {
      throw new Error("invalid email or password");
    }
    let res = yield fetch("https://thelatexeditor.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    let user = yield res.json();
    yield put(setCurrentUser(user));
  } catch (error) {}
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
    let res = yield fetch("https://thelatexeditor.com/save-and-compile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    let user = yield res.json();
    yield put(setCurrentUser(user));
    yield put(toggleEditorViewer("both"));
  } catch (error) {}
}

export function* addFile({ payload: { folderRef } }) {
  const email = yield select(getEmail);
  const payload = {
    email,
    folderRef
  };
  try {
    let res = yield fetch("https://thelatexeditor.com/add-file", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    let user = yield res.json();
    yield put(setCurrentUser(user));
  } catch (error) {}
}

export function* addFolder() {
  const email = yield select(getEmail);
  const payload = {
    email
  };
  try {
    let res = yield fetch("https://thelatexeditor.com/add-folder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    let user = yield res.json();
    yield put(setCurrentUser(user));
  } catch (error) {}
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
    let res = yield fetch("https://thelatexeditor.com/change-file-name", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    let user = yield res.json();
    yield put(setCurrentUser(user));
  } catch (error) {}
}

export function* changeFolderName({ payload: { ref, newName } }) {
  const email = yield select(getEmail);
  const payload = {
    email,
    ref,
    newName
  };
  console.log(payload);
  try {
    let res = yield fetch("https://thelatexeditor.com/change-folder-name", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    let user = yield res.json();
    yield put(setCurrentUser(user));
  } catch (error) {}
}

export function* onSignInStart() {
  yield takeLatest(userActionTypes.SIGN_IN_START, fetchUser);
}

export function* onSignInDefaultStart() {
  yield takeLatest(userActionTypes.SIGN_IN_DEFAULT_START, fetchDefaultUser);
}

export function* onRegisterStart() {
  yield takeLatest(userActionTypes.REGISTER_START, register);
}

export function* onSaveTextToFile() {
  yield takeLatest(userActionTypes.SAVE_TEXT_TO_FILE, saveAndCompile);
}

export function* onAddFile() {
  yield takeLatest(userActionTypes.ADD_FILE, addFile);
}

export function* onAddFolder() {
  yield takeLatest(userActionTypes.ADD_FOLDER, addFolder);
}

export function* onChangeFileName() {
  yield takeLatest(userActionTypes.CHANGE_FILE_NAME, changeFileName);
}

export function* onChangeFolderName() {
  yield takeLatest(userActionTypes.CHANGE_FOLDER_NAME, changeFolderName);
}

export function* userSagas() {
  yield all([
    call(onSignInDefaultStart),
    call(onSignInStart),
    call(onSaveTextToFile),
    call(onRegisterStart),
    call(onAddFile),
    call(onChangeFileName),
    call(onChangeFolderName),
    call(onAddFolder)
  ]);
}
