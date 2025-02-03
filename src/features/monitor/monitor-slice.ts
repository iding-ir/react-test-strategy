import { PayloadAction } from "@reduxjs/toolkit";

import { createAppSlice } from "../../app/createAppSlice";
import { DEFAULT_NOTIFICATIONS } from "./monitor";
import { NotificationType, NotificationsType } from "./type";

export interface NotificationsState {
  notifications: NotificationsType;
}

const initialState: NotificationsState = {
  notifications: DEFAULT_NOTIFICATIONS,
};

export const notificationSlice = createAppSlice({
  name: "monitor",
  initialState,
  reducers: (create) => ({
    addNotification: create.reducer(
      (state, { payload }: PayloadAction<NotificationType>) => {
        state.notifications.push(payload);
      },
    ),
    clearNotification: create.reducer((state) => {
      state.notifications = DEFAULT_NOTIFICATIONS;
    }),
  }),
  selectors: {
    selectNotifications: ({ notifications }) => notifications,
  },
});

export const { addNotification, clearNotification } = notificationSlice.actions;

export const { selectNotifications } = notificationSlice.selectors;
