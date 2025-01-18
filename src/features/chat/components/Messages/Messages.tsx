import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { Button } from "../../../../components/Button";
import { Title } from "../../../../components/Title";
import { clearMessages, selectMessages } from "../../chat-slice";
import { Message } from "../Message/Message";

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
      <Title>Messages:</Title>

      <ul data-testid="message-list" className="grid gap-y-2 mb-4">
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </ul>

      <Button testId="clear-messages" onClick={handleClearMessages}>
        Clear messages
      </Button>
    </div>
  );
};
