import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { beforeEach, describe, expect, it } from "vitest";

import { store } from "../../../../../app/store";
import { addMessage, clearMessages } from "../../../chat-slice";
import { Messages } from "../Messages";

describe("Messages", () => {
  beforeEach(() => {
    store.dispatch(clearMessages());
  });

  it("should not render messages initially", () => {
    // Arrange
    render(
      <Provider store={store}>
        <Messages />
      </Provider>,
    );

    // Act
    const component = screen.queryByTestId("messages");

    // Assert
    expect(component).not.toBeInTheDocument();
  });

  it("should render messages correctly", () => {
    // Arrange
    const messages = ["Hello, world!", "Farewell, cruel world!"];
    store.dispatch(addMessage(messages[0]));
    store.dispatch(addMessage(messages[1]));

    render(
      <Provider store={store}>
        <Messages />
      </Provider>,
    );

    // Act
    const component = screen.queryByTestId("messages");
    const messageList = screen.queryByTestId("message-list");
    const messageItems = screen.queryAllByTestId("message-item");

    // Assert
    expect(component).toBeInTheDocument();
    expect(messageItems).toHaveLength(2);
    expect(messageList).toHaveTextContent(messages[0]);
    expect(messageList).toHaveTextContent(messages[1]);
  });

  it("should clear messages when the button is clicked", async () => {
    // Arrange
    const messages = ["Hello, world!", "Farewell, cruel world!"];
    store.dispatch(addMessage(messages[0]));
    store.dispatch(addMessage(messages[1]));

    render(
      <Provider store={store}>
        <Messages />
      </Provider>,
    );

    // Act
    await waitFor(() =>
      expect(screen.getByText("Hello, world!")).toBeInTheDocument(),
    );

    await waitFor(() =>
      expect(screen.getByText("Farewell, cruel world!")).toBeInTheDocument(),
    );

    const button = await screen.findByTestId("clear-messages");
    button.click();
    const component = await screen.findByTestId("messages");
    const messageList = screen.queryByTestId("message-list");
    const messageItems = screen.queryAllByTestId("message-item");

    // Assert
    expect(component).not.toBeInTheDocument();
    expect(messageList).not.toBeInTheDocument();
    expect(messageItems).toHaveLength(0);
  });
});
