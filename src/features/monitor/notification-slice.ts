import { PayloadAction } from "@reduxjs/toolkit";

import { createAppSlice } from "../createAppSlice";
import { NotificationsType, NotificationType } from "./type";

export interface NotificationsState {
  all: NotificationsType;
}

const initialState: NotificationsState = {
  all: [],
};

export const notificationSlice = createAppSlice({
  name: "notifications",
  initialState,
  reducers: (create) => ({
    addNotification: create.reducer(
      (state, { payload }: PayloadAction<NotificationType>) => {
        state.all = [...state.all, payload];
      }
    ),
    clearNotification: create.reducer((state) => {
      state.all = [];
    }),
  }),
  selectors: {
    selectNotifications: ({ all }) => all,
  },
});

export const { addNotification, clearNotification } = notificationSlice.actions;

export const { selectNotifications } = notificationSlice.selectors;
