import type { NewSelectorProps } from "@/shared/lib/store/types";
import { setActiveTeam } from "@/shared/lib/store/newTeamSlice";
import { useDispatch, useSelector } from "react-redux";
import { getNewOrderClans } from "../../../../shared/lib/helpers/getNewOrderClans";
import type { NewSeasonProps } from "@/shared/lib/types/NewSeason/model/types";
import type { ActiveClanTypeProps } from "../../../../shared/lib/types/activeClan";
import { useMemo } from "react";

export function useNewToggleTeam(data: NewSeasonProps | null) {
  const dispatch = useDispatch();

  const activeTeam = useSelector(
    (state: NewSelectorProps) => state.teamName.teamValue,
  );

  const orderedClans = useMemo(
    () => getNewOrderClans(data, activeTeam),
    [activeTeam, data],
  );

  const setActiveClan = (team: ActiveClanTypeProps) => {
    dispatch(setActiveTeam(team));
  };

  const onToggleClans = () => {
    const newTeam = activeTeam === "2" ? "1" : "2";
    dispatch(setActiveTeam(newTeam));
  };

  return { activeClan: activeTeam, setActiveClan, orderedClans, onToggleClans };
}
