import { call, put, takeEvery } from "redux-saga/effects";

import { getErrorMessage } from "../../../methods/get-error-message";
import { randomlyThrowErrorAsync } from "../../../methods/randomly-throw-error-async";
import { addNotification } from "../../monitor/monitor-slice";
import { NotificationType } from "../../monitor/type";
import { requestAddMessage } from "../actions";
import { addMessage } from "../chat-slice";

export const getSuccessNotification = (): NotificationType => {
  return { message: "Message was added.", category: "success" };
};

export const getErrorNotification = (error: unknown): NotificationType => {
  return { message: getErrorMessage(error), category: "error" };
};

export const getInfoNotification = (): NotificationType => {
  return { message: "Retrying to send message...", category: "info" };
};

export function* requestAddMessageSaga(
  action: ReturnType<typeof requestAddMessage>,
): Generator {
  const threshold = 0.6;
  const random = Math.random();

  try {
    yield call(randomlyThrowErrorAsync, { threshold, random });
    yield put(addMessage(action.payload));
    yield put(addNotification(getSuccessNotification()));
  } catch (error) {
    yield put(addNotification(getErrorNotification(error)));
    yield put(addNotification(getInfoNotification()));
    yield put(requestAddMessage(action.payload));
  }
}

export function* watchRequestAddMessage() {
  yield takeEvery(requestAddMessage, requestAddMessageSaga);
}
