import { combineReducers } from "redux";
import { textReducer } from "./text/text.reducer";
import { screenReducer } from "./screen/screen.reducer";
import { dropdownMenuReducer } from "./dropdown-menu/dropdown-menu.reducer";

const rootReducer = combineReducers({
  text: textReducer,
  screen: screenReducer,
  dropdownMenu: dropdownMenuReducer
});

export default rootReducer;
