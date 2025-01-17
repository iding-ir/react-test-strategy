import { PayloadAction } from "@reduxjs/toolkit";

import { createAppSlice } from "../createAppAlice";
import { MessagesType, MessageType } from "./types";
import { DEFAULT_MESSAGES } from "./chat";

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
        state.messages = [...state.messages, payload];
      }
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
