import { screenActionTypes } from "./screen.types";

const INITIAL_STATE = {
  windowHeight: window.innerHeight,
  windowWidth: window.innerWidth,
  editorViewerToggle: "both",
  foldersToggle: false,
  resizerClicked: false
};

export const screenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case screenActionTypes.HANDLE_WINDOW_RESIZE:
      return {
        ...state,
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth
      };
    case screenActionTypes.TOGGLE_EDITOR_VIEWER:
      if (state.editorViewerToggle === action.payload) {
        return {
          ...state,
          editorViewerToggle: "both"
        };
      }
      return {
        ...state,
        editorViewerToggle: action.payload
      };
    case screenActionTypes.TOGGLE_FOLDERS:
      return {
        ...state,
        foldersToggle: !state.foldersToggle
      };
    case screenActionTypes.SWITCH_RESIZER_CLICKED:
      return {
        ...state,
        resizerClicked: action.payload
      };
    default:
      return state;
  }
};
