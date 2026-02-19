import { BASE_URL } from "@/shared/lib/constants/BASE_URL";

export function newPostBuySomething({
  model,
  productId,
  count,
}: {
  model: string;
  productId: number;
  count?: number;
}) {
  const resultBody = {
    model,
    id_products: productId,
    ...(count && { count: count }),
  };

  return fetch(`${BASE_URL}/buy_something/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(resultBody),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Error: response is failed");
      return response.json();
    })
    .then((data) => {
      if (!data) throw new Error("Error: data is failed");
      return data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}
