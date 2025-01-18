import { createAction } from "@reduxjs/toolkit";

import { MessageType } from "./types";

export const requestAddMessage = createAction<MessageType>(
  "chat/requestAddMessage",
);
