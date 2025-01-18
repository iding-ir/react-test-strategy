import { configureStore } from "@reduxjs/toolkit";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { describe, expect, it } from "vitest";

import { store } from "../../../../../app/store";
import { Messages } from "../Messages";

describe("Messages", () => {
  it("should not render messages initially", async () => {
    // Arrange
    render(
      <Provider store={store}>
        <Messages />
      </Provider>,
    );

    // Act
    const message = screen.queryByTestId("messages");

    // Assert
    expect(message).not.toBeInTheDocument();
  });

  it("should render messages correctly", () => {
    // Arrange
    const messages = ["Hello, world!"];
    const chatReducer = (state = { messages }) => state;
    const store = configureStore({ reducer: { chat: chatReducer } });

    render(
      <Provider store={store}>
        <Messages />
      </Provider>,
    );

    // Act
    const message = screen.queryByTestId("messages");

    // Assert
    expect(message).toHaveTextContent(messages[0]);
  });
});
