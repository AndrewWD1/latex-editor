import { TextActionTypes } from "./files.types";

export const updateText = code => ({
  type: TextActionTypes.CHANGE_TEXT,
  payload: code
});

export const saveTextToFile = (folder, file) => ({
  type: TextActionTypes.SAVE_TEXT_TO_FILE
});

export const switchCurrentFile = (folder, file) => ({
  type: TextActionTypes.SWITCH_CURRENT_FILE,
  payload: {
    folder,
    file
  }
});

export const addFolder = () => ({
  type: TextActionTypes.ADD_FOLDER
});

export const addFile = folder => ({
  type: TextActionTypes.ADD_FILE,
  payload: folder
});

export const changeFileName = (currentName, newName) => ({
  type: TextActionTypes.CHANGE_FILE_NAME,
  payload: {
    currentName,
    newName
  }
});

export const changeFolderName = (currentName, newName) => ({
  type: TextActionTypes.CHANGE_FOLDER_NAME,
  payload: {
    currentName,
    newName
  }
});
