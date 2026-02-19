import { NewButtonUi } from "@/shared/ui/NewButtonUi";
import IconBack from "@shared/assets/images/svg/icon-back.svg?react";
import styles from "./ButtonBackCommunity.module.scss";
import { useNavigate } from "react-router";

export function ButtonBackCommunity() {
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
      <div className={styles.buttonBackCommunity__button}>
        <IconBack className={styles.buttonBackCommunity__buttonIcon} />
        <h2 className={styles.buttonBackCommunity__buttonTitle}>Back</h2>
      </div>
    </NewButtonUi>
  );
}
