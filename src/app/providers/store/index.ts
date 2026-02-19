import { combineReducers, configureStore } from "@reduxjs/toolkit";
import newTeamReducer from "@/shared/lib/store/newTeamSlice";
import newInfoPersonReducer from "@/shared/lib/store/newInfoPersonSlice";
import newUserBalanseReducer from "@/shared/lib/store/newUserBalanseSlice";
import newPrizeReducer from "@/shared/lib/store/newPrizeSlice";

const rootReducer = combineReducers({
  teamName: newTeamReducer,
  infoPersonName: newInfoPersonReducer,
  userBalanseName: newUserBalanseReducer,
  prizeName: newPrizeReducer,
});

export default configureStore({
  reducer: rootReducer,
});
