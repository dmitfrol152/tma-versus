import type { NewOrderedClansProps } from "@/widgets/NewClans/model/types";
import type { ActiveClanTypeProps } from "../types/activeClan";

export function getNewNoTargetClan(
  orderedClans: NewOrderedClansProps[] | null,
  activeTeam: ActiveClanTypeProps,
) {
  const noTargetClan = orderedClans?.find((item) => item.key !== activeTeam);

  return noTargetClan;
}
