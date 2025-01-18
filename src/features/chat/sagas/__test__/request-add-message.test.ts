import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";
import { describe, it } from "vitest";

import { RANDOM_ERROR } from "../../../../methods/randomly-fail";
import { randomlyThrowErrorAsync } from "../../../../methods/randomly-throw-error-async";
import { addNotification } from "../../../monitor/monitor-slice";
import { requestAddMessage } from "../../actions";
import { addMessage } from "../../chat-slice";
import {
  getErrorNotification,
  getInfoNotification,
  getSuccessNotification,
  requestAddMessageSaga,
} from "../request-add-message";

describe("requestAddMessageSaga", () => {
  it("should correctly add message if no error is thrown", async () => {
    // Arrange
    const message = "Hello, world!";
    const action = requestAddMessage(message);
    const threshold = 0.5;
    const random = 0.1;

    // Act & Assert
    return expectSaga(requestAddMessageSaga, action)
      .provide([
        [matchers.call.fn(randomlyThrowErrorAsync), { threshold, random }],
      ])
      .put(addMessage(message))
      .put(addNotification(getSuccessNotification()))
      .run();
  });

  it("should retry to send message if error is thrown", () => {
    // Arrange
    const message = "Hello, world!";
    const action = requestAddMessage(message);
    const error = new Error(RANDOM_ERROR);

    // Act & Assert
    return expectSaga(requestAddMessageSaga, action)
      .provide([[matchers.call.fn(randomlyThrowErrorAsync), throwError(error)]])
      .put(addNotification(getErrorNotification(RANDOM_ERROR)))
      .put(addNotification(getInfoNotification()))
      .put(requestAddMessage(message))
      .run();
  });
});
