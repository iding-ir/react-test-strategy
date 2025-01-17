import { PayloadAction } from "@reduxjs/toolkit";

import { createAppSlice } from "../createAppSlice";
import {
  NotificationCategoryType,
  NotificationMessageType,
  NotificationType,
} from "./type";

export interface NotificationState {
  message: NotificationMessageType | null;
  category: NotificationCategoryType | null;
}

const initialState: NotificationState = {
  message: null,
  category: null,
};

export const notificationSlice = createAppSlice({
  name: "notification",
  initialState,
  reducers: (create) => ({
    addNotification: create.reducer(
      (state, { payload }: PayloadAction<NotificationType>) => {
        state.message = payload.message;
        state.category = payload.category;
      }
    ),
    clearNotification: create.reducer((state) => {
      state.message = null;
      state.category = null;
    }),
  }),
  selectors: {
    selectNotificationMessage: ({ message }) => message,
    selectNotificationCategory: ({ category }) => category,
  },
});

export const { addNotification, clearNotification } = notificationSlice.actions;

export const { selectNotificationMessage, selectNotificationCategory } =
  notificationSlice.selectors;
