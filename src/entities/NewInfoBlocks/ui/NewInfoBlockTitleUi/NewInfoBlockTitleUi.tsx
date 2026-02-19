import styles from "./NewInfoBlockTitleUi.module.scss";

export function NewInfoBlockTitleUi({ title }: { title: string }) {
  return <h3 className={styles.infoBlockTitleUi}>{title}</h3>;
}
