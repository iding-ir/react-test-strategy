import { describe, expect, it } from "vitest";

import {
  addMessage,
  chatSlice,
  clearMessages,
  selectMessages,
} from "../chat-slice";

describe("chatSlice", () => {
  it("should have initial state", () => {
    // Arrange
    const state = chatSlice.reducer(undefined, { type: "" });

    // Act
    const expected = { messages: [] };

    // Assert
    expect(state).toEqual(expected);
  });

  it("should add a message", () => {
    // Arrange
    const message = "Hello, world!";
    const initialState = { messages: [] };

    // Act
    const state = chatSlice.reducer(initialState, addMessage(message));
    const expected = { messages: [message] };

    // Assert
    expect(state).toEqual(expected);
  });

  it("should clear messages", () => {
    // Arrange
    const message = "Hello, world!";
    const initialState = { messages: [message] };

    // Act
    const state = chatSlice.reducer(initialState, clearMessages());
    const expected = { messages: [] };

    // Assert
    expect(state).toEqual(expected);
  });

  it("should select messages", () => {
    // Arrange
    const messages = ["Hello, world!"];
    const state = { chat: { messages } };

    // Act
    const received = selectMessages(state);

    // Assert
    expect(received).toEqual(messages);
  });
});
