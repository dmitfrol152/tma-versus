import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { NewInfoPersonValueProps } from "./types";

export const initialState: NewInfoPersonValueProps = {
  infoPerson: {
    nickname: "User",
    balance: 0,
    total_rewards: 0,
    received_coins_from_referrals: 0,
    friends_are_inv: 0,
    total_friends_earnings: 0,
    invite_link: "",
  },
};

const newInfoPersonSlice = createSlice({
  name: "infoPersonName",
  initialState,
  reducers: {
    setPerson: (state, action) => {
      state.infoPerson = action.payload;
    },
    setNickname: (state, action: PayloadAction<string>) => {
      state.infoPerson.nickname = action.payload;
    },
  },
});

export const { setPerson, setNickname } = newInfoPersonSlice.actions;
export default newInfoPersonSlice.reducer;
