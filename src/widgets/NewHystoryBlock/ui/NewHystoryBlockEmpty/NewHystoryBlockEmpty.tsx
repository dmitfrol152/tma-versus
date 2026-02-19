import styles from "./NewHystoryBlockEmpty.module.scss";

export function NewHystoryBlockEmpty() {
  return (
    <>
      <div className={styles.hystoryBlockEmpty__empty}>
        <span className={styles.hystoryBlockEmpty__emptyText}>Empty</span>
      </div>
    </>
  );
}
