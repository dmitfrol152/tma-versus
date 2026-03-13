// TODO: delete - import { LAYER_ARRAY_COMMUNITY } from "@/shared/lib/constants/LAYER_ARRAY_COMMUNITY";
import styles from "./NewAccordeon.module.scss";
import { useState } from "react";
import clsx from "clsx";
import { NewButtonUi } from "@/shared/ui/NewButtonUi";
import type { NewAccordeonProps } from "./types";
import IconDown from "@shared/assets/images/svg/icon-arrow-down.svg?react";
import IconTop from "@shared/assets/images/svg/icon-arrow-top.svg?react";
import { useOpenModal } from "./model/hooks/useOpenModal";
import { NewAccordeonItem } from "@/entities/AccordeonItem/NewAccordeonItem";
import { NewModalUi } from "@/shared/ui/NewModalUi";
import { NewModalCommunityLayer } from "./ui/NewModalCommunityLayer/NewModalCommunityLayer";

export function NewAccordeon({
  activeTeam,
  dataCommunityPage,
}: NewAccordeonProps) {
  const [openLayerIndex, setOpenLayerIndex] = useState<number | null>(null);
  const { isOpenModal, setIsOpenModal } = useOpenModal();

  function handleToggleLayerVisible(index: number) {
    setOpenLayerIndex(openLayerIndex === index ? null : index);
  }

  function handleOpenModal() {
    setIsOpenModal(true);
  }

  function handleCloseModal() {
    setIsOpenModal(false);
  }

  const activeClassName =
    activeTeam === "1"
      ? styles["accordeon--1"]
      : activeTeam === "2"
        ? styles["accordeon--2"]
        : styles["accordeon--default"];

  const layers = [
    dataCommunityPage.Layer_1,
    dataCommunityPage.Layer_2,
    dataCommunityPage.Layer_3,
    dataCommunityPage.Layer_4,
    dataCommunityPage.Layer_5,
  ];

  return (
    <>
      <ul className={clsx(styles.accordeon, activeClassName)}>
        {layers.map((layer, index) => {
          return (
            <li className={styles.accordeon__item} key={index}>
              <NewButtonUi
                className={styles.accordeon__custom}
                type="button"
                size="textXS"
                variant="textXS"
                onClickButton={() => handleToggleLayerVisible(index)}
              >
                <div className={styles.accordeon__button}>
                  <div className={styles.accordeon__buttonLeft}>
                    <span
                      className={styles.accordeon__buttonLeftTranslator}
                    ></span>
                    <p className={styles.accordeon__buttonLeftText}>
                      Layer {index + 1}
                    </p>
                  </div>
                  {openLayerIndex === index && (
                    <IconTop className={styles.accordeon__buttonRight} />
                  )}
                  {openLayerIndex !== index && (
                    <IconDown className={styles.accordeon__buttonRight} />
                  )}
                </div>
              </NewButtonUi>
              {!layer.length && openLayerIndex === index && (
                <div className={styles.accordeon__empty}>
                  <span className={styles.accordeon__emptyText}>Empty</span>
                </div>
              )}
              {openLayerIndex === index && (
                <ul className={styles.accordeon__list}>
                  {layer
                    .map((item, i) => {
                      return (
                        <li className={styles.accordeon__item} key={i}>
                          <NewAccordeonItem
                            item={item}
                            activeTeam={activeTeam}
                            index={i}
                          />
                        </li>
                      );
                    })
                    .slice(0, 3)}
                </ul>
              )}
              {layer.length > 3 && openLayerIndex === index && (
                <div className={styles.accordeon__itemButton}>
                  <NewButtonUi
                    type="button"
                    size="main"
                    variant="main"
                    onClickButton={handleOpenModal}
                  >
                    Show More
                  </NewButtonUi>
                </div>
              )}
              {openLayerIndex === index && isOpenModal && (
                <NewModalUi isOpenModal={!!isOpenModal}>
                  <NewModalCommunityLayer
                    layer={layer}
                    layerNumber={openLayerIndex + 1}
                    handleCloseModal={handleCloseModal}
                    activeTeam={activeTeam}
                  />
                </NewModalUi>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}
