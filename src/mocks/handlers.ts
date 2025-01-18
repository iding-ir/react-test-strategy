import { ws } from "msw";

const chat = ws.link(import.meta.env.VITE_WS_URL);

export const handlers = [
  chat.addEventListener("connection", ({ client }) => {
    console.log("Server log: Connection established");

    client.send("Server welcomes you to the chat!");

    client.addEventListener("message", (event) => {
      client.send(`Server received message: ${event.data}`);
    });

    client.addEventListener("close", () => {
      console.log("Server log: Connection closed");
    });
  }),
];
