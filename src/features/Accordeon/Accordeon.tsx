import { LAYER_ARRAY_COMMUNITY } from "@/shared/lib/constants/LAYER_ARRAY_COMMUNITY";
import styles from "./Accordeon.module.scss";
import { useState } from "react";
import clsx from "clsx";
import { NewButtonUi } from "@/shared/ui/NewButtonUi";
import type { AccordeonProps } from "./types";
import IconDown from "@shared/assets/images/svg/icon-arrow-down.svg?react";
import IconTop from "@shared/assets/images/svg/icon-arrow-top.svg?react";
import { useOpenModal } from "./model/hooks/useOpenModal";
import { AccordeonItem } from "@/entities/AccordeonItem/AccordeonItem";
import { NewModalUi } from "@/shared/ui/NewModalUi";
import { ModalCommunityLayer } from "./ui/ModalCommunityLayer/ModalCommunityLayer";

export function Accordeon({ activeTeam }: AccordeonProps) {
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

  return (
    <>
      <ul className={clsx(styles.accordeon, activeClassName)}>
        {LAYER_ARRAY_COMMUNITY.map((layer, index) => {
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
              {openLayerIndex === index && (
                <ul className={styles.accordeon__list}>
                  {layer.peoples
                    .map((item, i) => {
                      return (
                        <li className={styles.accordeon__item} key={i}>
                          <AccordeonItem
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
              {layer.peoples.length > 3 && openLayerIndex === index && (
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
              {openLayerIndex !== null && (
                <NewModalUi isOpenModal={!!isOpenModal}>
                  <ModalCommunityLayer
                    peoples={layer.peoples}
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
      ;
    </>
  );
}
