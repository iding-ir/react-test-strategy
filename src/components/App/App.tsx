import { Chat } from "../../features/chat/components/Chat";
import { Monitor } from "../../features/monitor/components/Monitor";
import { Header } from "../Header";
import { Wrappers } from "../Wrappers";

export const App = () => {
  return (
    <Wrappers>
      <Header />

      <main
        data-testid="app"
        className="p-4 grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-4"
      >
        <Chat />

        <Monitor />
      </main>
    </Wrappers>
  );
};
