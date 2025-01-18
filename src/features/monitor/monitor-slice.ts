import { PayloadAction } from "@reduxjs/toolkit";

import { createAppSlice } from "../createAppSlice";
import { NotificationType, NotificationsType } from "./type";

export interface NotificationsState {
  notifications: NotificationsType;
}

const initialState: NotificationsState = {
  notifications: [],
};

export const notificationSlice = createAppSlice({
  name: "monitor",
  initialState,
  reducers: (create) => ({
    addNotification: create.reducer(
      (state, { payload }: PayloadAction<NotificationType>) => {
        state.notifications = [...state.notifications, payload];
      },
    ),
    clearNotification: create.reducer((state) => {
      state.notifications = [];
    }),
  }),
  selectors: {
    selectNotifications: ({ notifications }) => notifications,
  },
});

export const { addNotification, clearNotification } = notificationSlice.actions;

export const { selectNotifications } = notificationSlice.selectors;
