import { screenActionTypes } from "./screen.types";

const INITIAL_STATE = {
  windowHeight: window.innerHeight,
  windowWidth: window.innerWidth,
  editorViewerToggle: "both",
  foldersToggle: false,
  resizerClicked: false,
  divider: 0
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
    case screenActionTypes.MOVE_DIVIDER:
      if (state.foldersToggle) {
        if (action.payload.clientX < 230) {
          return {
            ...state,
            editorViewerToggle: "editor",
            resizerClicked: false,
            divider: 0
          };
        }
        if (action.payload.clientX > state.windowWidth - 180 + 130) {
          return {
            ...state,
            editorViewerToggle: "viewer",
            resizerClicked: false,
            divider: 0
          };
        }
        return {
          ...state,
          divider: action.payload.clientX - (state.windowWidth - 180) / 2 - 180
        };
      } else {
        if (action.payload.clientX < 50) {
          return {
            ...state,
            editorViewerToggle: "editor",
            resizerClicked: false,
            divider: 0
          };
        }
        if (action.payload.clientX > state.windowWidth - 50) {
          return {
            ...state,
            editorViewerToggle: "viewer",
            resizerClicked: false,
            divider: 0
          };
        }
        return {
          ...state,
          divider: action.payload.clientX - state.windowWidth / 2
        };
      }
    default:
      return state;
  }
};
