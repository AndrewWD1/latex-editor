import { combineReducers } from "redux";
import { screenReducer } from "./screen/screen.reducer";
import { dropdownMenuReducer } from "./dropdown-menu/dropdown-menu.reducer";
import { editorOptionsReducer } from "./editor-options/editor-options.reducer";
import { folderReducer } from "./files/files.reducer";

const rootReducer = combineReducers({
  screen: screenReducer,
  dropdownMenu: dropdownMenuReducer,
  editorOptions: editorOptionsReducer,
  folders: folderReducer
});

export default rootReducer;
