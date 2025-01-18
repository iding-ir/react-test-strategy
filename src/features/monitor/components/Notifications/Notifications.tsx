import { useAppSelector } from "../../../../app/hooks";
import { Title } from "../../../../components/Title";
import { selectNotifications } from "../../monitor-slice";
import { Notification } from "../Notification";

export const Notifications = () => {
  const notifications = useAppSelector(selectNotifications);

  if (!notifications.length) {
    return <div>No notifications yet.</div>;
  }

  return (
    <>
      <Title>Notifications:</Title>

      <ul className="grid gap-y-2 mb-4">
        {notifications.map((notification, index) => (
          <Notification key={index} notification={notification} />
        ))}
      </ul>
    </>
  );
};
