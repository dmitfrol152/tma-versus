export const getParseFromTimeToSec = (time: string) => {
  const [d, h, m, s] = time.split(":").map((t) => Number(t));

  return d * 86400 + h * 3600 + m * 60 + s;
};
