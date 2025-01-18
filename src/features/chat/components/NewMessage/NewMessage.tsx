import { Input } from "../../../../components/Input";
import { Title } from "../../../../components/Title";
import { MessageType } from "../../types";

export const NewMessage = ({
  onSubmit,
}: {
  onSubmit: (message: MessageType) => void;
}) => {
  return (
    <div>
      <Title>New message:</Title>

      <Input testId="new-message" onSubmit={onSubmit} />
    </div>
  );
};
