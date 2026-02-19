import { BASE_URL } from "../../lib/constants/BASE_URL";

export function newPostTonConnectAdress({ adress }: { adress: string }) {
  return fetch(`${BASE_URL}/apply_wallet/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ wallet: adress }),
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
