import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { NewPrizeSliceProps } from "./types";

export const initialState: NewPrizeSliceProps = {
  prizeValue: 0,
};

const newPrizeSlice = createSlice({
  name: "prizeName",
  initialState,
  reducers: {
    setPrize: (state, action: PayloadAction<number>) => {
      state.prizeValue = action.payload;
    },
  },
});

export const { setPrize } = newPrizeSlice.actions;
export default newPrizeSlice.reducer;
