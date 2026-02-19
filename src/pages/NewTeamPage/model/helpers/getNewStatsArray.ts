import type { NewStatsAnyTeamProps } from "@/shared/api/newFetchTeam/model/types";

export function getNewStatsArray({
  currentStatistics,
}: {
  currentStatistics: NewStatsAnyTeamProps;
}) {
  return [
    {
      id: 1,
      icon: true,
      data: currentStatistics.total_coins,
      text: "Total coins farmed",
      sign: false,
    },
    {
      id: 2,
      icon: false,
      data: currentStatistics.productivity_per_day,
      text: "Productivity per day",
      sign: true,
    },
    {
      id: 3,
      icon: false,
      data: currentStatistics.total_players,
      text: "Total players",
      sign: false,
    },
    {
      id: 4,
      icon: false,
      data: currentStatistics.total_traders,
      text: "Total traders",
      sign: false,
    },
  ];
}
