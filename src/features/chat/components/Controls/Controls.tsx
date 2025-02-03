import { useAppDispatch } from "../../../../app/hooks";
import { Button } from "../../../../components/Button";
import { Title } from "../../../../components/Title";
import { useWebsocket } from "../../../../hooks/use-websocket";
import { requestAddMessage } from "../../actions";
import { NewMessage } from "../NewMessage";

export const Controls = () => {
  const dispatch = useAppDispatch();
  const { isOpen, openConnection, sendMessage, closeConnection } = useWebsocket(
    {
      url: import.meta.env.VITE_WS_URL,
      onOpened: () => {
        dispatch(requestAddMessage("Client sends its greetings"));
      },
      onReceive: (message) => {
        dispatch(requestAddMessage(message));
      },
      onClosed: () => {
        dispatch(requestAddMessage("Client says goodbye"));
      },
    },
  );

  return (
    <>
      <Title>Controls:</Title>

      <div className="grid grid-cols-2 gap-2">
        <Button
          testId="connect-button"
          disabled={isOpen}
          onClick={openConnection}
        >
          Open connection
        </Button>

        <Button
          testId="disconnect-button"
          disabled={!isOpen}
          onClick={closeConnection}
        >
          Close connection
        </Button>
      </div>

      {isOpen && <NewMessage onSubmit={sendMessage} />}
    </>
  );
};
