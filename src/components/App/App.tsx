import { Wrappers } from "../Wrappers";
import { Header } from "../Header";
import { Chat } from "../../features/chat/components/Chat";
import { Monitor } from "../../features/monitor/components/Monitor";

export const App = () => {
  return (
    <Wrappers>
      <main>
        <Header />

        <Chat />

        <Monitor />
      </main>
    </Wrappers>
  );
};
