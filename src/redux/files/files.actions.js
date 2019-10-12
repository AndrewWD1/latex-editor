import { TextActionTypes } from "./files.types";

export const updateText = code => ({
  type: TextActionTypes.CHANGE_TEXT,
  payload: code
});

export const saveTextToFile = (folder, file) => ({
  type: TextActionTypes.SAVE_TEXT_TO_FILE,
  payload: {
    folder,
    file
  }
});

export const switchCurrentFile = (folder, file) => ({
  type: TextActionTypes.SWITCH_CURRENT_FILE,
  payload: {
    folder,
    file
  }
});
