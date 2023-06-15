import { getAxios } from "../core/utility";
import { getConfig } from "../config";

export const apiAxios = () => {
  return getAxios(getConfig().apiBaseUrl);
};
