import { NewClansList } from "@/widgets/NewClans/ui/NewClansList";
import styles from "./NewClans.module.scss";
import { NewClansButtons } from "./ui/NewClansButtons";
import type { NewClanProps } from "./model/types";

export function NewClans({
  data,
  activeTeam,
  orderedClans,
  handleClickTeamOne,
  handleClickTeamTwo,
  handleClickChangeTeamConfirm,
  isStartTour,
  setIsStartTour,
}: NewClanProps) {
  return (
    <div className={styles.clans} data-tour="homePageTeam">
      <NewClansList
        activeClan={activeTeam}
        orderedClans={orderedClans}
        isStartTour={isStartTour}
        setIsStartTour={setIsStartTour}
      />
      <NewClansButtons
        data={data}
        activeClan={activeTeam}
        handleClickTeamOne={handleClickTeamOne}
        handleClickTeamTwo={handleClickTeamTwo}
        handleClickChangeTeamConfirm={handleClickChangeTeamConfirm}
      />
    </div>
  );
}
