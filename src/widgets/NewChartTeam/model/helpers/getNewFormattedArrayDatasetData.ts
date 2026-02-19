export function getNewFormattedArrayDatasetData<
  T extends { date: string; id: number },
>({
  datasetCurrentData,
  count,
}: {
  datasetCurrentData: T[];
  count: number;
}): number[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const startDay = new Date(today);
  startDay.setDate(today.getDate() - (count - 1));
  startDay.setHours(0, 0, 0, 0);

  const filtered = [...datasetCurrentData]
    .filter((item) => {
      const itemDate = new Date(item.date);
      itemDate.setHours(0, 0, 0, 0);
      return itemDate >= startDay && itemDate <= today;
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return filtered.map((item) => {
    const valueKey = Object.keys(item).find(
      (key) => key !== "date" && key !== "id",
    ) as keyof T;

    const value = valueKey ? item[valueKey] : 0;
    return typeof value === "number" ? value : Number(value) || 0;
  });
}
