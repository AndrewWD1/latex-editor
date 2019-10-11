/**
 * fonts
 * 
  'Fira Code'
  'Ubuntu Mono'
  'VT323'
  'Nova Mono'
 */
import { editorOptionsActionTypes } from "./editor-options.types";

const INITIAL_STATE = {
  language: "python",
  theme: "vs-dark",
  font: "Fira Code",
  fontLigatures: true
};

export const editorOptionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case editorOptionsActionTypes.CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload
      };
    case editorOptionsActionTypes.CHANGE_THEME:
      return {
        ...state,
        theme: action.payload
      };
    case editorOptionsActionTypes.CHANGE_FONT:
      return {
        ...state,
        font: action.payload
      };
    case editorOptionsActionTypes.TOGGLE_LIGATURES:
      return {
        ...state,
        fontLigatures: !state.fontLigatures
      };
    default:
      return state;
  }
};
