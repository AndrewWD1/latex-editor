import { combineReducers } from "redux";
import { textReducer } from "./text/text.reducer";
import { screenReducer } from "./screen/screen.reducer";

const rootReducer = combineReducers({
  text: textReducer,
  screen: screenReducer
});

export default rootReducer;
