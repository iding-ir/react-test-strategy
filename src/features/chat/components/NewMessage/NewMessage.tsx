import { Input } from "../../../../components/Input";
import { MessageType } from "../../types";

export const NewMessage = ({
  onSubmit,
}: {
  onSubmit: (message: MessageType) => void;
}) => {
  return (
    <div>
      <h2>New message:</h2>

      <Input testId="new-message" onSubmit={onSubmit} />
    </div>
  );
};
