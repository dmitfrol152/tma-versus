export const getParseFromSecToTime = (time: number) => {
  if (time <= 0) return "00:00:00:00";

  const d = Math.floor(time / 86400);
  const h = Math.floor((time % 86400) / 3600);
  const m = Math.floor((time % 3600) / 60);
  const s = time % 60;

  return [d, h, m, s].map((t) => t.toString().padStart(2, "0")).join(":");
};
