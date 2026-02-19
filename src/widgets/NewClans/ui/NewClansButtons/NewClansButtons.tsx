import { NewButtonUi } from "@/shared/ui/NewButtonUi";
import type { NewClansButtonsProps } from "@/widgets/NewClans/model/types";
import { NewButtonsContainerUi } from "@/shared/ui/NewButtonsContainerUi";
import styles from "./NewClansButtons.module.scss";

export function NewClansButtons({
  activeClan,
  handleClickTeamOne,
  handleClickTeamTwo,
  handleClickChangeTeamConfirm,
  data,
}: NewClansButtonsProps) {
  if (activeClan === null) {
    return (
      <div className={styles.clansButtons}>
        <NewButtonsContainerUi className="ten">
          <NewButtonUi
            type="button"
            size="main"
            variant="main"
            onClickButton={() => handleClickTeamOne()}
          >
            {`Select ${data.first_team.name}`}
          </NewButtonUi>
        </NewButtonsContainerUi>
        <NewButtonsContainerUi className="ten">
          <NewButtonUi
            type="button"
            size="main"
            variant="main"
            onClickButton={() => handleClickTeamTwo()}
          >
            {`Select ${data.second_team.name}`}
          </NewButtonUi>
        </NewButtonsContainerUi>
      </div>
    );
  }

  if (activeClan !== null) {
    return (
      <NewButtonsContainerUi className="ten">
        <NewButtonUi
          type="button"
          size="main"
          variant="main"
          onClickButton={() => handleClickChangeTeamConfirm()}
        >
          Swap to{" "}
          {activeClan === "1"
            ? `${data.second_team.name}`
            : `${data.first_team.name}`}
        </NewButtonUi>
      </NewButtonsContainerUi>
    );
  }

  return null;
}
