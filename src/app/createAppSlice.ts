import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";

// `buildCreateSlice` allows us to create a slice with async thunks.
// If options are commented out, then it results to `createSlice`.
export const createAppSlice = buildCreateSlice({
  creators: {
    asyncThunk: asyncThunkCreator,
  },
});
