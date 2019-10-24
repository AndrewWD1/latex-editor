import { createStore } from "redux";
import rootReducer from "./root.reducer";
// import logger from "redux-logger";

//const middleWares = process.env.NODE_ENV === "development" ? [logger] : [];
// export const store = createStore(rootReducer, applyMiddleware(...middleWares));
export const store = createStore(
  rootReducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
