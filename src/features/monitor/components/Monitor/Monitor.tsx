import { useAppSelector } from "../../../../app/hooks";
import { selectNotifications } from "../../notification-slice";
import { Notifications } from "../Notifications";

export const Monitor = () => {
  const notifications = useAppSelector(selectNotifications);

  if (!notifications.length) {
    return null;
  }

  return (
    <section>
      <Notifications />
    </section>
  );
};
