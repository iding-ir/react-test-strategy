import { useState } from "react";
import { useAppDispatch } from "../../../../app/hooks";
import { addMessage } from "../../chat-slice";
import { getMessage } from "../../../../methods/get-message";

export const Controls = () => {
  const dispatch = useAppDispatch();
  const [socket, setSocket] = useState<WebSocket | null>(null);

  const openConnection = () => {
    const socket = new WebSocket("ws://localhost:3000");

    socket.onopen = () => {
      socket.send(getMessage("Client sends its greetings!"));
    };

    socket.onmessage = (event) => {
      dispatch(addMessage(event.data));
    };

    socket.onclose = () => {
      socket.send(getMessage("Client says farewell!"));
    };

    setSocket(socket);
  };

  const sendMessage = () => {
    if (!socket) {
      return;
    }

    socket.send(getMessage("New message"));
  };

  const closeConnection = () => {
    if (!socket) {
      return;
    }

    socket.close();
  };

  return (
    <>
      <button onClick={openConnection}>Open connection</button>
      <button onClick={sendMessage}>Send message</button>
      <button onClick={closeConnection}>Close connection</button>
    </>
  );
};
