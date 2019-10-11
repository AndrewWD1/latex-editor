import { screenActionTypes } from "./screen.types";

export const handleResize = () => ({
  type: screenActionTypes.HANDLE_RESIZE
});

export const toggleEditorViewer = component => ({
  type: screenActionTypes.TOGGLE_EDITOR_VIEWER,
  payload: component
});

export const toggleFolders = () => ({
  type: screenActionTypes.TOGGLE_FOLDERS
});
