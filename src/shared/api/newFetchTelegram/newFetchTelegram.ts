import { BASE_URL } from "@/shared/lib/constants/BASE_URL";

export async function newFetchTelegram(
  tgInitData: string,
  referId: number = 0,
) {
  // const url = new URL(`${BASE_URL}/create_session/`);

  // if (referId) {
  //   url.searchParams.append("refer_id", referId.toString());
  // }

  let url = `${BASE_URL}/create_session/`;

  if (referId) {
    const sep = url.includes("?") ? "&" : "?";
    url = `${url}${sep}refer_id=${encodeURIComponent(referId.toString())}`;
  }

  return fetch(url.toString(), {
    method: "GET",
    headers: {
      Authorization: tgInitData,
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
