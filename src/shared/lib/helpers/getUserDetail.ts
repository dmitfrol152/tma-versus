import { LAYER_ARRAY_COMMUNITY } from "../constants/LAYER_ARRAY_COMMUNITY";

export function getUserDetail(nickname: string, layerNumber: number) {
  return LAYER_ARRAY_COMMUNITY[layerNumber].peoples.find(
    (user) => user.nickname === nickname
  );
}
