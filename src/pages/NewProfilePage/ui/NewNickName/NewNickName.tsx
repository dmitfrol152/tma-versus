import { NewButtonUi } from "@/shared/ui/NewButtonUi";
import { NewInputUi } from "@/shared/ui/NewInputUi";
import type { NewNickNameProps } from "./types";
import clsx from "clsx";
import styles from "./NewNickName.module.scss";

export function NewNickName({
  value,
  setValue,
  activeTeam,
  handleChangeButton,
  isEditing,
  profileName,
  refField,
}: NewNickNameProps) {
  const activeClassName =
    activeTeam === "1"
      ? styles["nickName--1"]
      : activeTeam === "2"
        ? styles["nickName--2"]
        : styles["nickName--default"];

  const sameProfileName = value === profileName;
  const buttonName =
    isEditing && sameProfileName
      ? "Cancel"
      : isEditing && !sameProfileName
        ? "Save"
        : "Change";

  return (
    <div className={clsx(styles.nickName, activeClassName)}>
      <div className={styles.nickName__title}>
        <span className={styles.nickName__titleTranslator}></span>
        <h3 className={styles.nickName__titleText}>Nickname</h3>
      </div>
      <div className={styles.nickName__field}>
        <NewInputUi
          type="text"
          value={value}
          setValue={setValue}
          placeholder={value}
          isDisabled={!isEditing}
          refField={refField}
          beforeActive={true}
        />
        <div className={styles.nickName__fieldButton}>
          <NewButtonUi
            type="button"
            size="main"
            variant="main"
            onClickButton={handleChangeButton}
          >
            {buttonName}
          </NewButtonUi>
        </div>
      </div>
    </div>
  );
}
