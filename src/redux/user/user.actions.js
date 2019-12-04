import { userActionTypes } from "./user.types";

export const signOut = () => ({
  type: userActionTypes.SIGN_OUT
});

export const setCurrentUser = user => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user
});

export const signInStart = (email, password) => ({
  type: userActionTypes.SIGN_IN_START,
  payload: {
    email,
    password
  }
});

export const signInDefaultStart = () => ({
  type: userActionTypes.SIGN_IN_DEFAULT_START
});

export const registerStart = (name, email, password) => ({
  type: userActionTypes.REGISTER_START,
  payload: {
    name,
    email,
    password
  }
});

export const updateText = code => ({
  type: userActionTypes.CHANGE_TEXT,
  payload: code
});

export const saveTextToFile = () => ({
  type: userActionTypes.SAVE_TEXT_TO_FILE
});

export const switchCurrentFile = file => ({
  type: userActionTypes.SWITCH_CURRENT_FILE,
  payload: {
    file
  }
});

export const addFolder = () => ({
  type: userActionTypes.ADD_FOLDER
});

export const addFile = folderRef => ({
  type: userActionTypes.ADD_FILE,
  payload: {
    folderRef
  }
});

export const changeFileName = (ref, newName) => ({
  type: userActionTypes.CHANGE_FILE_NAME,
  payload: {
    ref,
    newName
  }
});

export const changeFolderName = (ref, newName) => ({
  type: userActionTypes.CHANGE_FOLDER_NAME,
  payload: {
    ref,
    newName
  }
});

export const setFolderChangingName = folderRef => ({
  type: userActionTypes.SET_FOLDER_CHANGING_NAME,
  payload: {
    folderRef
  }
});

export const setFolderChangingNameInput = input => ({
  type: userActionTypes.SET_FOLDER_CHANGING_NAME_INPUT,
  payload: {
    input
  }
});

export const setFileChangingName = file => ({
  type: userActionTypes.SET_FILE_CHANGING_NAME,
  payload: {
    file
  }
});

export const setFileChangingNameInput = input => ({
  type: userActionTypes.SET_FILE_CHANGING_NAME_INPUT,
  payload: {
    input
  }
});

export const setErrorOnSignInOrRegister = error => ({
  type: userActionTypes.SET_ERROR_ON_SIGNIN_REGISTER,
  payload: error
});

export const removeFile = ref => ({
  type: userActionTypes.REMOVE_FILE,
  payload: {
    ref
  }
});

export const removeFolder = ref => ({
  type: userActionTypes.REMOVE_FOLDER,
  payload: {
    ref
  }
});

export const setFetching = value => ({
  type: userActionTypes.SET_FETCHING,
  payload: {
    value
  }
});
