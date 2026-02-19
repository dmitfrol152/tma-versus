import { useTheme } from "@/shared/lib/context/context";
import styles from "./Footer.module.scss";
import { Tabs } from "@/widgets/Tabs";

export function Footer() {
  const theme = useTheme();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <Tabs theme={theme} />
      </div>
    </footer>
  );
}
