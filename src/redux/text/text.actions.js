import { TextActionTypes } from "./text.types";

export const updateText = code => ({
  type: TextActionTypes.CHANGE_TEXT,
  payload: code
});
