import { all, call, takeLatest, put, select } from "redux-saga/effects";

import { userActionTypes } from "./user.types";
import { toggleEditorViewer } from "../screen/screen.actions";
import {
  setCurrentUser,
  setErrorOnSignInOrRegister,
  setFetching
} from "./user.actions";

export const getCurrentFile = state => state.user.currentFile;
export const getCurrentFolder = state => state.user.currentFolder;
export const getCurrentFolderRef = state => state.user.currentFolder.ref;
export const getCurrentFileRef = state => state.user.currentFile.ref;
export const getEmail = state => state.user.email;

export function* fetchDefaultUser() {
  yield put(setFetching(true));

  try {
    let res = yield fetch("https://thelatexeditor.com/testuser", {
      method: "GET"
    });

    if (res.status === 404) {
      yield put(setFetching(false));
      let errorText = yield res.text();
      yield put(setErrorOnSignInOrRegister(errorText));
    } else {
      let user = yield res.json();
      yield put(setCurrentUser(user));
    }
  } catch (error) {}
}

export function* fetchUser({ payload }) {
  const { email, password } = payload;

  yield put(setErrorOnSignInOrRegister(null));
  yield put(setFetching(true));

  if (email === "" || password === "") {
    yield put(setErrorOnSignInOrRegister("Password or email cannot be empty"));
    yield put(setFetching(false));
    return;
  }
  try {
    let res = yield fetch("https://thelatexeditor.com/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    if (res.status === 404) {
      yield put(setFetching(false));
      let errorText = yield res.text();
      yield put(setErrorOnSignInOrRegister(errorText));
    } else {
      let user = yield res.json();
      yield put(setCurrentUser(user));
    }
  } catch (error) {}
}

export function* register({ payload }) {
  const { name, email, password } = payload;

  if (name === "") payload.name = "User";

  yield put(setErrorOnSignInOrRegister(null));
  yield put(setFetching(true));

  if (email === "" || password === "") {
    yield put(setErrorOnSignInOrRegister("Invalid email or password"));
    yield put(setFetching(false));
    return;
  }

  try {
    let res = yield fetch("https://thelatexeditor.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    if (res.status === 404) {
      yield put(setFetching(false));
      let errorText = yield res.text();
      yield put(setErrorOnSignInOrRegister(errorText));
    } else {
      let user = yield res.json();
      yield put(setCurrentUser(user));
    }
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
  yield put(setFetching(true));
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
    yield put(setFetching(false));
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

export function* removeFolder({ payload: { ref } }) {
  const email = yield select(getEmail);
  const currentFolderRef = yield select(getCurrentFolderRef);
  const currentFolder = yield select(getCurrentFolder);
  const currentFile = yield select(getCurrentFile);

  if (ref === currentFolderRef) {
    alert("You cannot remove the current working folder");
    return;
  }
  const payload = {
    email,
    ref,
    currentFolder,
    currentFile
  };
  try {
    let res = yield fetch("https://thelatexeditor.com/remove-folder", {
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

export function* removeFile({ payload: { ref } }) {
  const email = yield select(getEmail);
  const currentFileRef = yield select(getCurrentFileRef);
  const currentFile = yield select(getCurrentFile);

  if (ref === currentFileRef) {
    alert("You cannot remove the current working file");
    return;
  }

  const payload = {
    email,
    ref,
    currentFile
  };
  try {
    let res = yield fetch("https://thelatexeditor.com/remove-file", {
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

export function* onRemoveFolder() {
  yield takeLatest(userActionTypes.REMOVE_FOLDER, removeFolder);
}

export function* onRemoveFile() {
  yield takeLatest(userActionTypes.REMOVE_FILE, removeFile);
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
    call(onAddFolder),
    call(onRemoveFolder),
    call(onRemoveFile)
  ]);
}
