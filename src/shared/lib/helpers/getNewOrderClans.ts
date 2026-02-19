import type { NewSeasonProps } from "../types/NewSeason/model/types";

export function getNewOrderClans(
  data: NewSeasonProps | null,
  activeTeam: "1" | "2" | null,
) {
  const orderedClans =
    activeTeam === "1" && data
      ? [
          { key: "1", clan: data.first_team },
          { key: "2", clan: data.second_team },
        ]
      : activeTeam === "2" && data
        ? [
            { key: "2", clan: data.second_team },
            { key: "1", clan: data.first_team },
          ]
        : activeTeam !== "1" && activeTeam !== "2" && data
          ? [
              { key: "1", clan: data.first_team },
              { key: "2", clan: data.second_team },
            ]
          : [
              { key: "1", clan: null },
              { key: "2", clan: null },
            ];

  return orderedClans;
}
