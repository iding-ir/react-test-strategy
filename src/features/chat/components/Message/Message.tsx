import { MessageType } from "../../types";

export const Message = ({ message }: { message: MessageType }) => {
  return (
    <li data-testid="message-item" className="bg-gray-50 p-2 rounded shadow">
      {message}
    </li>
  );
};
