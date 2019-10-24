import { combineReducers } from "redux";
import { screenReducer } from "./screen/screen.reducer";
import { dropdownMenuReducer } from "./dropdown-menu/dropdown-menu.reducer";
import { editorOptionsReducer } from "./editor-options/editor-options.reducer";
import { userReducer } from "./user/user.reducer";

const rootReducer = combineReducers({
  screen: screenReducer,
  dropdownMenu: dropdownMenuReducer,
  editorOptions: editorOptionsReducer,
  user: userReducer
});

export default rootReducer;
