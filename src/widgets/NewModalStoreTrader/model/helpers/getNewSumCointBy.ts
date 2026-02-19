export function getNewSumCointBy(traderCount: number, price: number) {
  const value = price * traderCount;
  const newValue = value.toLocaleString("en-EN");

  return newValue;
}
