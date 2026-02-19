// import { useMemo } from "react";
// import type { ClanSafeDataProps } from "../types";

// export function useClanSafeData({
//   activeTeam,
//   dataClans,
//   maxValue,
// }: ClanSafeDataProps) {
//   const clanSafeData = useMemo(() => {
//     if (!activeTeam || !dataClans) {
//       return null;
//     }
//     const clan = dataClans[activeTeam];
//     return {
//       value: clan.safe.value,
//       max: maxValue,
//     };
//   }, [activeTeam, dataClans, maxValue]);

//   return clanSafeData;
// }
