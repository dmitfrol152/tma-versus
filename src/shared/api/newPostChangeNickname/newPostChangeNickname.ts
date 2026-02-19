import { BASE_URL } from "@/shared/lib/constants/BASE_URL";

export function newPostChangeNickname({ nickname }: { nickname: string }) {
  return fetch(`${BASE_URL}/change_nickname/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ nickname }),
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
