import { useState } from "react";
import { useAppDispatch } from "../../../../app/hooks";
import { addMessage } from "../../chat-slice";
import { Button } from "../../../../components/Button";
import { NewMessage } from "../NewMessage";
import { MessageType } from "../../types";

export const Controls = () => {
  const dispatch = useAppDispatch();
  const [socket, setSocket] = useState<WebSocket | null>(null);

  const openConnection = () => {
    const socket = new WebSocket("ws://localhost:3000");

    socket.onopen = () => {
      socket.send("Client sends its greetings!");
    };

    socket.onmessage = (event) => {
      dispatch(addMessage(event.data));
    };

    socket.onclose = () => {
      socket.send("Client says farewell!");
    };

    setSocket(socket);
  };

  const sendMessage = (message: MessageType) => {
    if (!socket) {
      return;
    }

    socket.send(message);
  };

  const closeConnection = () => {
    if (!socket) {
      return;
    }

    socket.close();
    setSocket(null);
  };

  return (
    <>
      <div>
        <h2>Connection:</h2>

        <Button disabled={!!socket} onClick={openConnection}>
          Open connection
        </Button>

        <Button disabled={!socket} onClick={closeConnection}>
          Close connection
        </Button>
      </div>

      {!!socket && <NewMessage onSubmit={sendMessage} />}
    </>
  );
};
