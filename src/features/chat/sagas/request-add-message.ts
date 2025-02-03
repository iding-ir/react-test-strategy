import { call, put, takeEvery } from "redux-saga/effects";

import { getErrorMessage } from "../../../methods/get-error-message";
import { randomlyThrowErrorAsync } from "../../../methods/randomly-throw-error-async";
import { addNotification } from "../../monitor/monitor-slice";
import { requestAddMessage } from "../actions";
import { addMessage } from "../chat-slice";

export const SUCCESS_MESSAGE = "Message added successfully!";
export const INFO_MESSAGE = "Retrying to send message...";

// Worker saga
export function* requestAddMessageSaga(
  action: ReturnType<typeof requestAddMessage>,
): Generator {
  const threshold = 0.6;
  const random = Math.random();

  try {
    yield call(randomlyThrowErrorAsync, { threshold, random });
    yield put(addMessage(action.payload));
    yield put(
      addNotification({ message: SUCCESS_MESSAGE, category: "success" }),
    );
  } catch (error) {
    yield put(
      addNotification({ message: getErrorMessage(error), category: "error" }),
    );
    yield put(addNotification({ message: INFO_MESSAGE, category: "info" }));
    yield put(requestAddMessage(action.payload));
  }
}

// Watcher saga
export function* watchRequestAddMessage() {
  yield takeEvery(requestAddMessage, requestAddMessageSaga);
}
