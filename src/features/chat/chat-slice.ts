import { PayloadAction } from "@reduxjs/toolkit";
import { ChatsType, ChatType } from "./types";
import { DEFAULT_CHATS } from "./chat";
import { createAppSlice } from "../createAppAlice";

export interface ChatState {
  messages: ChatsType;
}

const initialState: ChatState = {
  messages: DEFAULT_CHATS,
};

export const chatSlice = createAppSlice({
  name: "chat",
  initialState,
  reducers: (create) => ({
    addMessage: create.reducer(
      (state, { payload }: PayloadAction<ChatType>) => {
        state.messages = [...state.messages, payload];
      }
    ),
    clearMessages: create.reducer((state) => {
      state.messages = DEFAULT_CHATS;
    }),
  }),
  selectors: {
    selectMessages: ({ messages }) => messages,
  },
});

export const { addMessage, clearMessages } = chatSlice.actions;

export const { selectMessages } = chatSlice.selectors;
