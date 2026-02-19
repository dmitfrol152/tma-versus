import { setActiveTeam } from "@/shared/lib/store/newTeamSlice";
import type { NewSelectorProps } from "@/shared/lib/store/types";
import type { NewUserBalanceProps } from "@/shared/lib/types/NewUserBalance/model/types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useNewActiveTeamInit(
  userBalanse: NewUserBalanceProps | null,
  isSuccessHomePage: boolean,
) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccessHomePage && userBalanse && userBalanse.team) {
      const teamId = String(userBalanse.team.id);
      dispatch(setActiveTeam(teamId as "1" | "2"));
    }
  }, [dispatch, isSuccessHomePage, userBalanse]);

  const activeTeam = useSelector(
    (state: NewSelectorProps) => state.teamName.teamValue,
  );

  return activeTeam;
}
