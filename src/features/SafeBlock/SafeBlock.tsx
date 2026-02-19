// import { ButtonUi } from "@/shared/ui/ButtonUi";
// import styles from "./SafeBlock.module.scss";
// import type { SafeBlockDataProps } from "./model/types";
// import clsx from "clsx";
// import { useMaxValue } from "./model/hooks/useMaxValue";
// import { useClanSafeData } from "./model/hooks/useClanSafeData";
// import { usePercent } from "../../widgets/InfoBlock/model/hooks/usePercent";
// import { useActiveClass } from "./model/hooks/useActiveClass";

// export function SafeBlock({
//   dataDefault,
//   activeTeam,
//   dataClans,
// }: SafeBlockDataProps) {
//   const maxValue = useMaxValue({ dataDefault });
//   const clanSafeData = useClanSafeData({ activeTeam, dataClans, maxValue });
//   const { currentValue, currentMax, percent } = usePercent({
//     activeTeam,
//     clanSafeData,
//     dataDefault,
//   });
//   const className = useActiveClass({ activeTeam });
//   const classNameTextColor =
//     activeTeam === "1"
//       ? styles["safeBlock__infoData--bulls"]
//       : activeTeam === "2"
//       ? styles["safeBlock__infoData--bears"]
//       : styles["safeBlock__infoData--default"];

//   return (
//     <div className={styles.safeBlock}>
//       <div className={styles.safeBlock__info}>
//         <h3 className={styles.safeBlock__infoTitle}>Your safe</h3>
//         <div className={styles.safeBlock__infoProgressWrapper}>
//           <div className={styles.safeBlock__infoProgress}>
//             <div
//               className={clsx(
//                 styles.safeBlock__infoProgressFill,
//                 styles[`${className}`]
//               )}
//               style={{ width: `${percent}%` }}
//             />
//           </div>
//         </div>
//         <span className={clsx(styles.safeBlock__infoData, classNameTextColor)}>
//           {currentValue.toLocaleString("en-EN")}/
//           {currentMax.toLocaleString("en-EN")}
//         </span>
//       </div>
//       <div className={styles.safeBlock__btn}>
//         <ButtonUi
//           type="button"
//           size="main"
//           variant="main"
//           disabled={currentValue <= 0}
//           onClickButton={() => alert("Click on Claim")}
//         >
//           Claim
//         </ButtonUi>
//       </div>
//     </div>
//   );
// }
