import type { NewInputProps } from "./types";
import styles from "./NewInputUi.module.scss";
import clsx from "clsx";

export function NewInputUi({
  label,
  type,
  placeholder,
  value,
  setValue,
  isDisabled = false,
  refField,
  beforeActive = false,
}: NewInputProps) {
  const wrapperClass = clsx(
    styles.inputUi,
    beforeActive && styles["inputUi--before"],
  );

  return (
    <div className={wrapperClass}>
      {label && (
        <label className={styles.inputUi__label} htmlFor={label}>
          {label}
        </label>
      )}
      <input
        ref={refField}
        id={label}
        className={styles.inputUi__field}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        disabled={isDisabled}
      />
    </div>
  );
}
