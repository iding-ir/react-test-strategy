import { combineSlices } from "@reduxjs/toolkit";

import { chatSlice } from "../features/chat/chat-slice";
import { notificationSlice } from "../features/monitor/monitor-slice";

export const rootReducer = combineSlices(chatSlice, notificationSlice);
