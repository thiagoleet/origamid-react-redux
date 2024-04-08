import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contador",
  initialState: {
    total: 0,
  },
  reducers: {
    increment: (state) => {
      state.total += 1;
    },
    decrement: (state) => {
      state.total -= 1;
    },
  },
});

export const { increment, decrement } = slice.actions;
export default slice.reducer;
