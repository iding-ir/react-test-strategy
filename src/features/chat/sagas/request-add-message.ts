import { call, put, takeEvery } from "redux-saga/effects";
import { addMessage } from "../chat-slice";
import { randomlyValidate } from "../../../methods/randomly-validate";
import { addNotification } from "../../monitor/monitor-slice";
import { requestAddMessage } from "../actions";
import { getErrorMessage } from "../../../methods/get-error-message";
import { NotificationType } from "../../monitor/type";

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
  action: ReturnType<typeof requestAddMessage>
): Generator {
  try {
    yield call(randomlyValidate, { threshold: 0.6, random: Math.random() });
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
