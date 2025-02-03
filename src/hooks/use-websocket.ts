import { useCallback, useEffect, useState } from "react";

export const useWebsocket = ({
  url,
  onOpened,
  onClosed,
  onReceive,
}: {
  url: string;
  onOpened?: () => void;
  onClosed?: () => void;
  onReceive: (message: string) => void;
}) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    return () => {
      socket?.close();
    };
  }, [onClosed, onOpened, onReceive, url, socket]);

  const openConnection = useCallback(() => {
    const socket = new WebSocket(url);

    socket.addEventListener("open", () => {
      setSocket(socket);
      onOpened?.();
    });

    socket.addEventListener("close", () => {
      setSocket(null);
      onClosed?.();
    });

    socket.addEventListener("message", (event) => {
      onReceive(event.data);
    });

    socket.addEventListener("error", (event) => {
      throw new Error(`WebSocket error: ${event}`);
    });
  }, [onClosed, onOpened, onReceive, url]);

  const closeConnection = useCallback(() => {
    socket?.close();
  }, [socket]);

  const sendMessage = useCallback(
    (message: string) => {
      socket?.send(message);
    },
    [socket],
  );

  return {
    socket,
    isOpen: Boolean(socket),
    openConnection,
    sendMessage,
    closeConnection,
  };
};
