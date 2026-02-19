import { NewButtonUi } from "@/shared/ui/NewButtonUi";
import IconBack from "@shared/assets/images/svg/icon-back.svg?react";
import styles from "./NewButtonBack.module.scss";
import { useNavigate } from "react-router";

export function NewButtonBack() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <NewButtonUi
      type="button"
      size="textXS"
      variant="textXS"
      onClickButton={handleBackClick}
    >
      <div className={styles.buttonBack__button}>
        <IconBack className={styles.buttonBack__buttonIcon} />
        <h2 className={styles.buttonBack__buttonTitle}>My account</h2>
      </div>
    </NewButtonUi>
  );
}
