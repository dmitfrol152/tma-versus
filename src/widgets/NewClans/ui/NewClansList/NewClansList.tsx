import type { NewClansListProps } from "@/widgets/NewClans/model/types";
import styles from "./NewClansList.module.scss";
import { NewClansItem } from "@/entities/NewClansItem";
import clsx from "clsx";
import { useNavigate } from "react-router";

export function NewClansList({
  activeClan,
  orderedClans,
  isStartTour,
  setIsStartTour,
}: NewClansListProps) {
  const navigate = useNavigate();

  if (!orderedClans) return "Empty";

  return (
    <ul className={styles.clansList}>
      {orderedClans.map(({ key, clan }, index) => {
        if (!clan) return "Empty";

        const handleCardClick = () => {
          if (isStartTour) {
            setIsStartTour(false);
            navigate("/team", { state: { startTeamTour: true } });
          }
        };

        return (
          <li
            onClick={handleCardClick}
            key={key}
            className={clsx(
              styles.clansList__item,
              index === 1 ? styles["clansList__item--first"] : "",
            )}
          >
            <NewClansItem
              clan={clan}
              activeClan={activeClan}
              isStartTour={isStartTour}
            />
          </li>
        );
      })}
    </ul>
  );
}
