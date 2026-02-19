import { useEffect, useState } from "react";
import styles from "./NewBlockOrientationUI.module.scss";

export function NewBlockOrientationUI() {
  const [block, setBlock] = useState<boolean>(
    window.innerHeight < window.innerWidth,
  );

  useEffect(() => {
    const handleResize = () => {
      setBlock(window.innerWidth > window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    window.screen?.orientation?.addEventListener("change", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.screen?.orientation?.removeEventListener("change", handleResize);
    };
  }, []);

  if (!block) return null;

  return (
    <div className={styles.newBlockOrientationUI}>
      <span className={styles.newBlockOrientationUI__text}>
        Please, rotate your phone
      </span>
    </div>
  );
}
