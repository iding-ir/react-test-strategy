import { useAppSelector } from "../../../../app/hooks";
import { selectNotifications } from "../../notification-slice";
import { Notification } from "../Notification";

export const Notifications = () => {
  const notifications = useAppSelector(selectNotifications);

  if (!notifications.length) {
    return null;
  }

  return (
    <>
      <h2>Notification:</h2>

      <ul>
        {notifications.map((notification, index) => (
          <Notification key={index} notification={notification} />
        ))}
      </ul>
    </>
  );
};
