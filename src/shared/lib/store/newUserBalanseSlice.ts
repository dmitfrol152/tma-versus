import { createSlice } from "@reduxjs/toolkit";
import type { NewuserBalanseStoreValueProps } from "./types";

export const initialState: NewuserBalanseStoreValueProps = {
  userBalanse: {
    id: 0,
    token_money: 0,
    game_coin: 0,
    team: { id: 0, name: "" },
    can_change_team_for_pay: true,
    my_ofice: {
      id: 0,
      ofice: {
        id: 0,
        lvl: 0,
        count_of_traders: 0,
        comfort: 0,
        safe_capacity: 0,
        price: 0,
        block: false,
      },
      traders: [
        {
          trader: {
            id: 0,
            currency: { id: 0, name: "" },
            picture: "",
            name: "",
            earn_for_day: 0,
            price: 0,
            lvl: 0,
          },
          total: 0,
          id: 0,
          isActive: false,
        },
      ],
    },
    my_bank: 0,
    earn_in_team_per_month: 0,
    earn_in_team_per_weak: 0,
    list_of_my_traders: [
      {
        trader: {
          id: 0,
          currency: {
            id: 0,
            name: "",
          },
          picture: "",
          name: "",
          earn_for_day: 0,
          price: 0,
          lvl: 0,
        },
        total: 0,
        id: 0,
        isActive: false,
      },
    ],
    your_share_in_team: "",
  },
};

const newUserBalanseSlice = createSlice({
  name: "userBalanseName",
  initialState,
  reducers: {
    setUserBalanse: (state, action) => {
      state.userBalanse = action.payload;
    },
  },
});

export const { setUserBalanse } = newUserBalanseSlice.actions;
export default newUserBalanseSlice.reducer;
