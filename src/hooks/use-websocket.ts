import { useState } from "react";

import { MessageType } from "../features/chat/types";

export const useWebsocket = <T>({
  onMessage,
}: {
  onMessage: (message: T) => void;
}) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  const openConnection = () => {
    const socket = new WebSocket(import.meta.env.VITE_WS_URL);

    socket.onopen = () => {
      socket.send("Client sends its greetings!");
    };

    socket.onmessage = (event) => {
      onMessage(event.data);
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

  return {
    socket,
    isOpen: Boolean(socket),
    openConnection,
    sendMessage,
    closeConnection,
  };
};
