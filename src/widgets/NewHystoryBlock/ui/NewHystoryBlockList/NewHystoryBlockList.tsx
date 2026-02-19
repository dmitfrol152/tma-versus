import type { NewHystoryBlockListProps } from "./types";
import styles from "./NewHystoryBlockList.module.scss";
import { NewHystoryBlockItem } from "@/entities/NewHystoryBlockItem/NewHystoryBlockItem/ui";

export function NewHystoryBlockList({
  hystoryClaims,
}: NewHystoryBlockListProps) {
  return (
    <ul className={styles.hystoryBlockList__list}>
      {hystoryClaims.map((item) => {
        return (
          <li className={styles.hystoryBlockList__item} key={item.id}>
            <NewHystoryBlockItem data={item} />
          </li>
        );
      })}
    </ul>
  );
}
