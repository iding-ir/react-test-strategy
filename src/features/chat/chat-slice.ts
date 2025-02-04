import { PayloadAction } from "@reduxjs/toolkit";

import { createAppSlice } from "../../app/createAppSlice";
import { DEFAULT_MESSAGES } from "./chat";
import { MessageType, MessagesType } from "./types";

export interface ChatState {
  messages: MessagesType;
}

const initialState: ChatState = {
  messages: DEFAULT_MESSAGES,
};

export const chatSlice = createAppSlice({
  name: "chat",
  initialState,
  reducers: (create) => ({
    addMessage: create.reducer(
      (state, { payload }: PayloadAction<MessageType>) => {
        state.messages.push(payload);
      },
    ),
    clearMessages: create.reducer((state) => {
      state.messages = DEFAULT_MESSAGES;
    }),
  }),
  selectors: {
    selectMessages: ({ messages }) => messages,
  },
});

export const { addMessage, clearMessages } = chatSlice.actions;

export const { selectMessages } = chatSlice.selectors;
