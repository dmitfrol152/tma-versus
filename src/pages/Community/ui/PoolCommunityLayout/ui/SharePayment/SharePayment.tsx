import styles from "./SharePayment.module.scss";
import clsx from "clsx";
import { SHAREPAYMENT_ARRAY_COMMUNITY } from "@/shared/lib/constants/SHAREPAYMENT_ARRAY_COMMUNITY";
import { NewBlockInfoUi } from "@/shared/ui/NewBlockInfoUi/NewBlockInfoUi";
import type { SharePaymentProps } from "./types";

export function SharePayment({ activeTeam }: SharePaymentProps) {
  const activeClassName =
    activeTeam === "1"
      ? styles["sharePayment--1"]
      : activeTeam === "2"
        ? styles["sharePayment--2"]
        : styles["sharePayment--default"];

  return (
    <div className={clsx(styles.sharePayment, activeClassName)}>
      <div className={styles.sharePayment__title}>
        <span className={styles.sharePayment__titleTranslator}></span>
        <h3 className={styles.sharePayment__titleText}>
          Your share and payment
        </h3>
      </div>
      <ul className={styles.sharePayment__list}>
        {SHAREPAYMENT_ARRAY_COMMUNITY.map((item, index) => {
          return (
            <li className={styles.sharePayment__item} key={index}>
              <NewBlockInfoUi
                data={item.data}
                text={item.text}
                icon={item.icon}
                sign={false}
                isActiveData={false}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
