import { combineReducers } from "redux";
import { textReducer } from "./text/text.reducer";

const rootReducer = combineReducers({
  text: textReducer
});

export default rootReducer;
