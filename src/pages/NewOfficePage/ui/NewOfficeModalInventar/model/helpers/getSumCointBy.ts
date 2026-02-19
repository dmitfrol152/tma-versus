export function getSumCointBy(traderCount: number) {
  const value = 500 * traderCount;
  const newValue = value.toLocaleString("en-EN");

  return newValue;
}
