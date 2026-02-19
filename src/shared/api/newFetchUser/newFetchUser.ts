import { BASE_URL } from "@/shared/lib/constants/BASE_URL";

export function newFetchUser() {
  return fetch(`${BASE_URL}/info_person/`, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
    credentials: "include",
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
