import type { NewInfoBlockYourSafeProps } from "@/entities/NewInfoBlocks/model/types";
import styles from "./NewInfoBlockYourSafe.module.scss";
import { NewButtonUi } from "@/shared/ui/NewButtonUi";
import { NewInfoBlockTitleUi } from "@/entities/NewInfoBlocks/ui/NewInfoBlockTitleUi";
import { NewInfoBlockProgressBarUi } from "@/entities/NewInfoBlocks/ui/NewInfoBlockProgressBarUi";

export function NewInfoBlockYourSafe({
  buttonName,
  activeTeam,
  // prize,
  // user,
  userBalanse,
  handleClaimBank,
}: NewInfoBlockYourSafeProps) {
  // let startValue: number;
  // let endValue: number;

  // if ((activeTeam === null && !userBalanse) || !userBalanse?.my_ofice.ofice) {
  //   startValue = 0;
  //   endValue = prize;
  // } else {
  //   const office = userBalanse.my_ofice.ofice;

  //   startValue = office.safe_capacity;
  //   endValue = office.lvl === 2 ? 10000 : office.lvl === 3 ? 100000 : 3000;
  // }
  let startValue: number;
  let endValue: number;

  if (!userBalanse) {
    startValue = 0;
    endValue = 0;
  } else {
    startValue = userBalanse.my_bank;
    endValue = userBalanse.my_ofice.ofice.safe_capacity;
  }

  return (
    <div className={styles.infoBlock}>
      <div className={styles.infoBlock__info}>
        <NewInfoBlockTitleUi title="Your safe" />
        <NewInfoBlockProgressBarUi
          activeTeam={activeTeam}
          startValue={startValue}
          endValue={endValue}
        />
      </div>
      <div className={styles.infoBlock__btns}>
        <NewButtonUi
          type="button"
          size="main"
          variant="main"
          disabled={startValue <= 0}
          onClickButton={() => handleClaimBank()}
        >
          {buttonName}
        </NewButtonUi>
      </div>
    </div>
  );
}
