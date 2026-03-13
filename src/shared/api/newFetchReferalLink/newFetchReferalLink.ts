import { BASE_URL } from "@/shared/lib/constants/BASE_URL";
import type { newFetchReferalLinkProps } from "./model/types";

export function newFetchReferalLink(): Promise<newFetchReferalLinkProps> {
  return fetch(`${BASE_URL}/get_invite_link/`, {
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
