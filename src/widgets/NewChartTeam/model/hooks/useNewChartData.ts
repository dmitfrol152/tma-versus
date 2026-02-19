import { useMemo } from "react";
import type { NewChartDataHookProps } from "./types";
import type { UnionTypeStats } from "@/shared/api/newFetchTeam/model/types";

export function useNewChartData({
  teamQuery,
  isButtonActiveTeam,
  currentActiveStatus,
}: NewChartDataHookProps) {
  const currentStatisticsOneTeam = teamQuery.stats_first_team;
  const currentStatisticsTwoTeam = teamQuery.stats_second_team;

  const datasetCurrentDataOneTeam =
    currentActiveStatus === 1
      ? currentStatisticsOneTeam.all_day_total_coins
      : currentActiveStatus === 2
        ? currentStatisticsOneTeam.all_day_productivity_per_day
        : currentActiveStatus === 3
          ? currentStatisticsOneTeam.all_day_total_players
          : currentStatisticsOneTeam.all_day_total_traders;

  const datasetCurrentDataTwoTeam =
    currentActiveStatus === 1
      ? currentStatisticsTwoTeam.all_day_total_coins
      : currentActiveStatus === 2
        ? currentStatisticsTwoTeam.all_day_productivity_per_day
        : currentActiveStatus === 3
          ? currentStatisticsTwoTeam.all_day_total_players
          : currentStatisticsTwoTeam.all_day_total_traders;

  const data = useMemo(() => {
    if (!datasetCurrentDataOneTeam && !datasetCurrentDataTwoTeam) {
      return { labels: [], datasets: [] };
    }

    // даты из обеих команд
    const allDatesRaw = [
      ...(datasetCurrentDataOneTeam || []).map((i) => new Date(i.date)),
      ...(datasetCurrentDataTwoTeam || []).map((i) => new Date(i.date)),
    ];

    if (!allDatesRaw.length) {
      return { labels: [], datasets: [] };
    }

    // самая ранняя дата
    const minDate = new Date(Math.min(...allDatesRaw.map((d) => d.getTime())));
    minDate.setHours(0, 0, 0, 0);

    // сегодня
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // диапазон от minDate до today
    const dateRange: Date[] = [];
    const current = new Date(minDate);

    while (current <= today) {
      dateRange.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }

    // labels
    const labelsCurrentDateArray = dateRange.map((date, index) => {
      const isLast = index === dateRange.length - 1;
      if (isLast) return "Today";

      return date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
      });
    });

    // значения для 1 команды
    const datasetDataCurrentArrayOneTeam = dateRange.map((date) => {
      const found = datasetCurrentDataOneTeam?.find(
        (item) => new Date(item.date).toDateString() === date.toDateString(),
      ) as UnionTypeStats;

      if (!found) return 0;

      if (currentActiveStatus === 1)
        return found.total_coins?.toLocaleString("en-US") ?? 0;
      if (currentActiveStatus === 2) return found.productivity_per_day ?? 0;
      if (currentActiveStatus === 3) return found.total_players ?? 0;
      return found.total_traders ?? 0;
    });

    // значения для 2 команды
    const datasetDataCurrentArrayTwoTeam = dateRange.map((date) => {
      const found = datasetCurrentDataTwoTeam?.find(
        (item) => new Date(item.date).toDateString() === date.toDateString(),
      ) as UnionTypeStats;

      if (!found) return 0;

      if (currentActiveStatus === 1) return found.total_coins ?? 0;
      if (currentActiveStatus === 2) return found.productivity_per_day ?? 0;
      if (currentActiveStatus === 3) return found.total_players ?? 0;
      return found.total_traders ?? 0;
    });

    return {
      labels: labelsCurrentDateArray,
      datasets: [
        {
          label: `${currentStatisticsOneTeam.name}`,
          data: datasetDataCurrentArrayOneTeam,
          borderColor:
            isButtonActiveTeam === "1"
              ? "rgba(67, 248, 114, 1)"
              : "rgba(67, 248, 114, 0.42)",
          borderWidth: 3,
          backgroundColor: "transparent",
          tension: 0.4,
          pointRadius: labelsCurrentDateArray.map((_, index) =>
            index === labelsCurrentDateArray.length - 1 ? 6 : 0,
          ),
          pointBackgroundColor: labelsCurrentDateArray.map((_, index) =>
            index === labelsCurrentDateArray.length - 1
              ? "#000000"
              : "transparent",
          ),
          pointBorderColor: labelsCurrentDateArray.map((_, index) =>
            index === labelsCurrentDateArray.length - 1
              ? "rgba(67, 248, 114, 1)"
              : "transparent",
          ),
          outerGlowColor:
            isButtonActiveTeam === "1"
              ? "rgba(67, 248, 114, 1)"
              : "rgba(67, 248, 114, 0.42)",
          outerGlowWidth: isButtonActiveTeam === "1" ? 50 : 0,
        },
        {
          label: `${currentStatisticsTwoTeam.name}`,
          data: datasetDataCurrentArrayTwoTeam,
          borderColor:
            isButtonActiveTeam === "2"
              ? "rgba(255, 0, 254, 1)"
              : "rgba(255, 0, 254, 0.42)",
          borderWidth: 3,
          backgroundColor: "transparent",
          tension: 0.4,
          pointRadius: labelsCurrentDateArray.map((_, index) =>
            index === labelsCurrentDateArray.length - 1 ? 6 : 0,
          ),
          pointBackgroundColor: labelsCurrentDateArray.map((_, index) =>
            index === labelsCurrentDateArray.length - 1
              ? "#000000"
              : "transparent",
          ),
          pointBorderColor: labelsCurrentDateArray.map((_, index) =>
            index === labelsCurrentDateArray.length - 1
              ? "rgba(255, 0, 254, 1)"
              : "transparent",
          ),
          outerGlowColor:
            isButtonActiveTeam === "2"
              ? "rgba(255, 0, 254, 1)"
              : "rgba(255, 0, 254, 0.42)",
          outerGlowWidth: isButtonActiveTeam === "2" ? 50 : 0,
        },
      ],
    };
  }, [
    datasetCurrentDataOneTeam,
    datasetCurrentDataTwoTeam,
    isButtonActiveTeam,
    currentActiveStatus,
    currentStatisticsOneTeam.name,
    currentStatisticsTwoTeam.name,
  ]);

  return { data };
}
