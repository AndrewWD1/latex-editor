import { userActionTypes } from "./user.types";

export const signIn = () => ({
  type: userActionTypes.SIGN_IN
});
export const signInDefault = () => ({
  type: userActionTypes.SIGN_IN_DEFAULT
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

export const changeFolderName = (currentName, newName) => ({
  type: userActionTypes.CHANGE_FOLDER_NAME,
  payload: {
    currentName,
    newName
  }
});
