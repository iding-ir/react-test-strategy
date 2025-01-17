import { Controls } from "../Controls";
import { Messages } from "../Messages";

export const Chat = () => {
  return (
    <section>
      <header>
        <h1>React Redux Saga Web Socket chat</h1>
      </header>

      <aside>
        <Controls />
      </aside>

      <main>
        <h2>Messages:</h2>

        <Messages />
      </main>
    </section>
  );
};
