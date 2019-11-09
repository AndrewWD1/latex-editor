import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./root.saga";

import rootReducer from "./root.reducer";

const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware];

export const store = createStore(
  rootReducer,
  /* preloadedState, */ composeWithDevTools(applyMiddleware(...middleWares))
);

sagaMiddleware.run(rootSaga);
