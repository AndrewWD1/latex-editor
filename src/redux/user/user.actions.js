import { userActionTypes } from "./user.types";

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

export const addFile = folderID => ({
  type: userActionTypes.ADD_FILE,
  payload: {
    folderID
  }
});

export const changeFileName = (id, newName) => ({
  type: userActionTypes.CHANGE_FILE_NAME,
  payload: {
    id,
    newName
  }
});

export const changeFolderName = (folderID, newName) => ({
  type: userActionTypes.CHANGE_FOLDER_NAME,
  payload: {
    folderID,
    newName
  }
});

export const setFolderChangingName = folderID => ({
  type: userActionTypes.SET_FOLDER_CHANGING_NAME,
  payload: {
    folderID
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
