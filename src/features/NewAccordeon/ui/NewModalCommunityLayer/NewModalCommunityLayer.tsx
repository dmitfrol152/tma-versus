import { NewButtonUi } from "@/shared/ui/NewButtonUi";
import styles from "./NewModalCommunityLayer.module.scss";
import type { NewModalCommunityLayerProps } from "./types";
import IconClose from "@shared/assets/images/svg/icon-close.svg?react";
import { NewAccordeonItem } from "@/entities/AccordeonItem/NewAccordeonItem";

export function NewModalCommunityLayer({
  layer,
  layerNumber,
  handleCloseModal,
  activeTeam,
}: NewModalCommunityLayerProps) {
  return (
    <div className="container">
      <div className={styles.modalCommunityLayer}>
        <div className={styles.modalCommunityLayer__inner}>
          <div className={styles.modalCommunityLayer__wrapper}>
            <h3 className={styles.modalCommunityLayer__title}>
              Layer {layerNumber}
            </h3>
            <ul className={styles.modalCommunityLayer__list}>
              {layer.map((item, i) => {
                return (
                  <li className={styles.modalCommunityLayer__item} key={i}>
                    <NewAccordeonItem
                      item={item}
                      activeTeam={activeTeam}
                      index={i}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <NewButtonUi
            type="button"
            size="textXS"
            variant="textXS"
            className={styles.modalCommunityLayer__close}
            onClickButton={() => handleCloseModal()}
          >
            <IconClose className={styles.modalCommunityLayer__closeIcon} />
          </NewButtonUi>
        </div>
      </div>
    </div>
  );
}
