import { useState } from "react";
import { getMessage } from "../../../../methods/get-message";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { addMessage, selectMessages } from "../../chat-slice";

export const Chat = () => {
  const dispatch = useAppDispatch();
  const messages = useAppSelector(selectMessages);

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
    <div>
      <h1>React Redux Saga Web Socket:</h1>

      <button onClick={openConnection}>Open connection</button>
      <button onClick={sendMessage}>Send message</button>
      <button onClick={closeConnection}>Close connection</button>

      <div>
        <h2>Messages</h2>

        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
