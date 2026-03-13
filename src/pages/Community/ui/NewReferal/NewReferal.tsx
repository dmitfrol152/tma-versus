import { NewButtonUi } from "@/shared/ui/NewButtonUi";
import { NewInputUi } from "@/shared/ui/NewInputUi";
import type { NewReferalProps } from "./types";
import clsx from "clsx";
import styles from "./NewReferal.module.scss";

export function NewReferal({
  isActiveReferalLink,
  // setIsActiveReferalLink,
  activeTeam,
  inputRef,
  handleCopyReferal,
  isRefStep,
}: NewReferalProps) {
  const activeClassName =
    activeTeam === "1"
      ? styles["referal--1"]
      : activeTeam === "2"
        ? styles["referal--2"]
        : styles["referal--default"];

  return (
    <div
      className={clsx(
        styles.referal,
        activeClassName,
        isRefStep && styles.referal__tourOnboarding,
      )}
      data-tour="communityPageReferal"
    >
      <div className={styles.referal__title}>
        <span className={styles.referal__titleTranslator}></span>
        <h3 className={styles.referal__titleText}>My referral link</h3>
      </div>
      <div className={styles.referal__field}>
        <NewInputUi
          type="text"
          value={isActiveReferalLink}
          setValue={() => {}}
          // setValue={setIsActiveReferalLink}
          placeholder={isActiveReferalLink}
          isDisabled={true}
          refField={inputRef}
        />
        <div className={styles.referal__fieldButton}>
          <NewButtonUi
            type="button"
            size="main"
            variant="main"
            onClickButton={handleCopyReferal}
          >
            Copy
          </NewButtonUi>
        </div>
      </div>
    </div>
  );
}
