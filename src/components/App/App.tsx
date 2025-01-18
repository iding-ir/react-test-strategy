import { Chat } from "../../features/chat/components/Chat";
import { Monitor } from "../../features/monitor/components/Monitor";
import { Header } from "../Header";
import { Wrappers } from "../Wrappers";

export const App = () => {
  return (
    <Wrappers>
      <main data-testid="app">
        <Header />

        <Chat />

        <Monitor />
      </main>
    </Wrappers>
  );
};
