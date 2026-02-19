import { useEffect } from "react";
import styles from "./NewModalUi.module.scss";
import type { ModalUiProps } from "./types";

export function NewModalUi({ children, isOpenModal = false }: ModalUiProps) {
  useEffect(() => {
    if (!isOpenModal) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpenModal]);

  if (!isOpenModal) return;

  return <div className={styles.modalUi}>{children}</div>;
}
