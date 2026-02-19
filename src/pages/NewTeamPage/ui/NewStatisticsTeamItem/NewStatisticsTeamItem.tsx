import type { NewStatisticsTeamItemProps } from "./types";
import styles from "./NewStatisticsTeamItem.module.scss";
import { NewButtonUi } from "@/shared/ui/NewButtonUi";
import { NewBlockInfoUi } from "@/shared/ui/NewBlockInfoUi/NewBlockInfoUi";
import { getNewStatsArray } from "../../model/helpers/getNewStatsArray";
import { useNavigate } from "react-router";

export function NewStatisticsTeamItem({
  teamQuery,
  isButtonActiveTeam,
  currentActiveStatus,
  setCurrentActiveStatus,
  isStartTour,
  setIsStartTour,
  stepIndex,
}: NewStatisticsTeamItemProps) {
  const navigate = useNavigate();

  const currentStatistics =
    isButtonActiveTeam === "1"
      ? teamQuery.stats_first_team
      : teamQuery.stats_second_team;

  const resultArrayStat = getNewStatsArray({ currentStatistics });

  return (
    <ul className={styles.newStatisticsTeamItem__list}>
      {resultArrayStat.map((item) => {
        return (
          <li className={styles.newStatisticsTeamItem__item} key={item.id}>
            <NewButtonUi
              type="button"
              size="full"
              variant="textXS"
              onClickButton={() => {
                if (isStartTour && stepIndex === 0) {
                  setIsStartTour(false);
                  navigate("/team");
                }
                setCurrentActiveStatus(item.id);
              }}
            >
              <NewBlockInfoUi
                icon={item.icon}
                data={item.data}
                text={item.text}
                sign={item.sign}
                isActiveData={currentActiveStatus === item.id}
              />
            </NewButtonUi>
          </li>
        );
      })}
    </ul>
  );
}
