import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./root.saga";

import rootReducer from "./root.reducer";

const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware, logger];
export const store = createStore(rootReducer, applyMiddleware(...middleWares));

sagaMiddleware.run(rootSaga);
