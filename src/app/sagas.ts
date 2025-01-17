import { all } from "redux-saga/effects";
import { watchRequestAddMessage } from "../features/chat/sagas/request-add-message";
import createSagaMiddleware from "redux-saga";

export function* rootSaga() {
  yield all([watchRequestAddMessage()]);
}

export const sagaMiddleware = createSagaMiddleware();
