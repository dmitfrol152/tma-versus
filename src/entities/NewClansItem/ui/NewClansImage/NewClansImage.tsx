import { useState } from "react";
import styles from "./NewClansImage.module.scss";
import type { TeamProps } from "@/shared/lib/types/NewTeam/model/types";
import clsx from "clsx";

export function NewClansImage({ clan }: { clan: TeamProps }) {
  const [isLoadedImage, setIsLoadedImage] = useState<boolean>(true);

  return (
    <div className={styles.clansImage__images}>
      {isLoadedImage && (
        <div className={styles.clansImage__loading}>
          <span className={styles.clansImage__text}>Loading..</span>
        </div>
      )}
      <img
        className={clsx(
          styles.clansImage__text,
          styles[`clansImage__text--${isLoadedImage}`],
        )}
        src={clan.picture}
        alt="team picture gerb"
        onLoad={() => setIsLoadedImage(false)}
        style={{ display: isLoadedImage ? "none" : "block" }}
      />
    </div>
  );
}
