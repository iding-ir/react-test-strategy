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
    return <div>Nothing to show yet!</div>;
  }

  return (
    <>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>

      <Button onClick={handleClearMessages}>Clear messages</Button>
    </>
  );
};
