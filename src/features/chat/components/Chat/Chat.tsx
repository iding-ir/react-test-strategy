import { Controls } from "../Controls";
import { Messages } from "../Messages";

export const Chat = () => {
  return (
    <section className="border border-gray-300 bg-gray-100 p-4 rounded-md">
      <Controls />

      <Messages />
    </section>
  );
};
