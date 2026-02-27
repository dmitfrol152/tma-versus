import { BASE_URL } from "@/shared/lib/constants/BASE_URL";

export function newPostAddOrChangeTrader({
  currentId,
  targetId,
}: {
  currentId: number;
  targetId?: number;
}) {
  const resultBody = {
    first_user_id_trader: currentId,
    ...(targetId && { second_user_id_trader: targetId }),
  };

  return fetch(`${BASE_URL}/apply_traders_in_ofice/`, {
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
