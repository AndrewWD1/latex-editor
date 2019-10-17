import { screenActionTypes } from "./screen.types";

export const handleResize = () => ({
  type: screenActionTypes.HANDLE_WINDOW_RESIZE
});

export const toggleEditorViewer = component => ({
  type: screenActionTypes.TOGGLE_EDITOR_VIEWER,
  payload: component
});

export const toggleFolders = () => ({
  type: screenActionTypes.TOGGLE_FOLDERS
});

export const switchResizerClicked = bool => ({
  type: screenActionTypes.SWITCH_RESIZER_CLICKED,
  payload: bool
});
