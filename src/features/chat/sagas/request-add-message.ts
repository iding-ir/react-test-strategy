import { call, put, takeEvery } from "redux-saga/effects";
import { addMessage } from "../chat-slice";
import { randomValidation } from "../../../methods/random-validation";
import { addNotification } from "../../notification/notification-slice";
import { requestAddMessage } from "../actions";
import { getErrorMessage } from "../../../methods/get-error-message";

function* requestAddMessageSaga(
  action: ReturnType<typeof requestAddMessage>
): Generator {
  try {
    yield call(randomValidation);
    yield put(addMessage(action.payload));
  } catch (error) {
    yield put(
      addNotification({ message: getErrorMessage(error), category: "error" })
    );
  }
}

export function* watchRequestAddMessage() {
  yield takeEvery(requestAddMessage, requestAddMessageSaga);
}
