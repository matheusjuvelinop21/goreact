import { createStore, applyMiddleware } from "redux";

import createSagaMiddleware from "redux-saga";

import reducers from "./ducks";

import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const composer = applyMiddleware(...middlewares);

const store = createStore(reducers, composer);

sagaMiddleware.run(sagas);

export default store;
