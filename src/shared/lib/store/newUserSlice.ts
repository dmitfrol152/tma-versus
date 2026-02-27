import { createSlice } from "@reduxjs/toolkit";
import type { NewUserValueProps } from "./types";

export const initialState: NewUserValueProps = {
  user: {
    id: 0,
    tg_id: 0,
    tg_username: "",
    tg_first_name: "",
    tg_last_name: "",
    photo_url: "",
    first_visit: "",
    last_visit: "",
    count_of_visit: 0,
    visit_without_pass: 0,
    is_baned: false,
    can_take_daly_tasks: false,
    wallet_address: "",
    referrer: 0,
  },
};

const newUserSlice = createSlice({
  name: "userName",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = newUserSlice.actions;
export default newUserSlice.reducer;
