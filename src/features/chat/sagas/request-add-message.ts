import { call, put, takeEvery } from "redux-saga/effects";
import { addMessage } from "../chat-slice";
import { randomlyValidation } from "../../../methods/randomly-validate";
import { addNotification } from "../../monitor/monitor-slice";
import { requestAddMessage } from "../actions";
import { getErrorMessage } from "../../../methods/get-error-message";

function* requestAddMessageSaga(
  action: ReturnType<typeof requestAddMessage>
): Generator {
  try {
    yield call(randomlyValidation);
    yield put(addMessage(action.payload));
    yield put(
      addNotification({ message: "Message was added.", category: "success" })
    );
  } catch (error) {
    yield put(
      addNotification({ message: getErrorMessage(error), category: "error" })
    );
    yield put(
      addNotification({
        message: "Retrying to send message...",
        category: "info",
      })
    );
    yield put(requestAddMessage(action.payload));
  }
}

export function* watchRequestAddMessage() {
  yield takeEvery(requestAddMessage, requestAddMessageSaga);
}
