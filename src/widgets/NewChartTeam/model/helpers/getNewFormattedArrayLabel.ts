export function getNewFormattedArrayLabel(count: number) {
  const labelArrayResult = [];
  const today = new Date();

  for (let i = count - 1; i >= 0; i--) {
    const date = new Date();

    date.setDate(today.getDate() - i);

    if (i === 0) {
      labelArrayResult.push("Today");
    } else {
      const formattedDate = date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
      });
      labelArrayResult.push(formattedDate);
    }
  }

  return labelArrayResult;
}
