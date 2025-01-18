import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { Button } from "../../../../components/Button";
import { clearMessages, selectMessages } from "../../chat-slice";

export const Messages = () => {
  const dispatch = useAppDispatch();
  const messages = useAppSelector(selectMessages);

  const handleClearMessages = () => {
    dispatch(clearMessages());
  };

  if (!messages.length) {
    return null;
  }

  return (
    <div data-testid="messages">
      <h2>Messages:</h2>

      <ul data-testid="message-list">
        {messages.map((message, index) => (
          <li data-testid="message-item" key={index}>
            {message}
          </li>
        ))}
      </ul>

      <Button onClick={handleClearMessages}>Clear messages</Button>
    </div>
  );
};
