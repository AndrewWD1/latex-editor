import { editorOptionsActionTypes } from "./editor-options.types";

export const changeTheme = theme => ({
  type: editorOptionsActionTypes.CHANGE_THEME,
  payload: theme
});

export const changeFont = font => ({
  type: editorOptionsActionTypes.CHANGE_FONT,
  payload: font
});

export const toggleLigatures = () => ({
  type: editorOptionsActionTypes.TOGGLE_LIGATURES
});
