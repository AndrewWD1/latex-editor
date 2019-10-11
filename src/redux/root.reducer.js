import { combineReducers } from "redux";
import { textReducer } from "./text/text.reducer";
import { screenReducer } from "./screen/screen.reducer";
import { dropdownMenuReducer } from "./dropdown-menu/dropdown-menu.reducer";
import { editorOptionsReducer } from "./editor-options/editor-options.reducer";

const rootReducer = combineReducers({
  text: textReducer,
  screen: screenReducer,
  dropdownMenu: dropdownMenuReducer,
  editorOptions: editorOptionsReducer
});

export default rootReducer;
