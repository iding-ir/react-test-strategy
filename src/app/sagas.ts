import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

import { watchRequestAddMessage } from "../features/chat/sagas/request-add-message";

export function* rootSaga() {
  yield all([watchRequestAddMessage()]);
}

export const sagaMiddleware = createSagaMiddleware();
