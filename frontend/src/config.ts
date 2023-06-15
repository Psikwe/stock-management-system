import { IConfig } from "./core/interfaces";

let options: IConfig;
export const setBaseApi = (v: string) => {
  return (options = { apiBaseUrl: v });
};
export const getConfig = (): IConfig => {
  return options;
};
