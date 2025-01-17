import { useAppSelector } from "../../../../app/hooks";
import { selectMessages } from "../../chat-slice";

export const Messages = () => {
  const messages = useAppSelector(selectMessages);

  return (
    <ul>
      {messages.map((msg, index) => (
        <li key={index}>{msg}</li>
      ))}
    </ul>
  );
};
