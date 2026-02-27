import { combineReducers, configureStore } from "@reduxjs/toolkit";
import newTeamReducer from "@/shared/lib/store/newTeamSlice";
import newInfoPersonReducer from "@/shared/lib/store/newInfoPersonSlice";
import newUserBalanseReducer from "@/shared/lib/store/newUserBalanseSlice";
import newUserReducer from "@/shared/lib/store/newUserSlice";
import newPrizeReducer from "@/shared/lib/store/newPrizeSlice";

const rootReducer = combineReducers({
  teamName: newTeamReducer,
  infoPersonName: newInfoPersonReducer,
  userBalanseName: newUserBalanseReducer,
  userUserName: newUserReducer,
  prizeName: newPrizeReducer,
});

export default configureStore({
  reducer: rootReducer,
});
