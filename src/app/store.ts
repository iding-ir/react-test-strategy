import {
  Action,
  ThunkAction,
  combineSlices,
  configureStore,
} from "@reduxjs/toolkit";
import { chatSlice } from "../features/chat/chat-slice";
import { rootSaga, sagaMiddleware } from "./sagas";
import { notificationSlice } from "../features/monitor/notification-slice";

const rootReducer = combineSlices(chatSlice, notificationSlice);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
