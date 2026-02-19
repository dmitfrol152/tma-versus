import type { NewChartTeamProps } from "./types";
import { Line } from "react-chartjs-2";
import styles from "./NewChartTeam.module.scss";
import { NewChartTeamButtons } from "./ui/NewChartTeamButtons";
import { useNewChartOptions } from "./model/hooks/useNewChartOptions";
import { useNewChartPlugins } from "./model/hooks/useNewChartPlugins";
import { useEffect } from "react";
import { useNewChartData } from "./model/hooks/useNewChartData";

export function NewChartTeam({
  isButtonActiveTeam,
  teamQuery,
  currentActiveStatus,
  activeTeam,
}: NewChartTeamProps) {
  const { data } = useNewChartData({
    teamQuery,
    isButtonActiveTeam,
    currentActiveStatus,
  });
  const { options } = useNewChartOptions();
  const { plugins } = useNewChartPlugins();

  useEffect(() => {
    return () => {
      const tooltipEl = document.getElementById("chartjs-tooltip-custom");
      if (tooltipEl) {
        tooltipEl.remove();
      }
    };
  }, []);

  return (
    <div className={styles.chartTeam}>
      <div className={styles.chartTeam__line}>
        <Line data={data} options={options} plugins={plugins} />
        <div className={styles.chartTeam__lineShadow}></div>
      </div>
      <NewChartTeamButtons
        activeTeam={activeTeam}
        isButtonActiveTeam={isButtonActiveTeam}
        teamQuery={teamQuery}
      />
    </div>
  );
}
