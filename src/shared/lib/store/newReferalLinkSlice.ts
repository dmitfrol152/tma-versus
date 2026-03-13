import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { NewReferalLinkProps } from "./types";

export const initialState: NewReferalLinkProps = {
  referalLinkValue: {
    invite_link: "",
  },
};

const newReferalLinkSlice = createSlice({
  name: "referalLinkName",
  initialState,
  reducers: {
    setReferalLink: (state, action: PayloadAction<string>) => {
      state.referalLinkValue.invite_link = action.payload;
    },
  },
});

export const { setReferalLink } = newReferalLinkSlice.actions;
export default newReferalLinkSlice.reducer;
