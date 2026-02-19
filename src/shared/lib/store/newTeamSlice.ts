import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { NewTeamSliceProps } from "./types";

// TODO: bulls - 1, bears - 2

export const initialState: NewTeamSliceProps = {
  teamValue: null,
};

const newTeamSlice = createSlice({
  name: "teamName",
  initialState,
  reducers: {
    setActiveTeam: (state, action: PayloadAction<"1" | "2" | null>) => {
      state.teamValue = action.payload;
    },
    clearActiveTeam: (state) => {
      state.teamValue = null;
    },
  },
});

export const { setActiveTeam, clearActiveTeam } = newTeamSlice.actions;
export default newTeamSlice.reducer;
