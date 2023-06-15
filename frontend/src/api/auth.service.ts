import { getAxios } from "../core/utility";
import { getConfig } from "../config";

export const UserSignup = async (
  fullName: string,
  email: string,
  companyName: string,
  password: string
) => {
  await getAxios(getConfig().apiBaseUrl).post("user/signup", {
    fullName,
    email,
    companyName,
    password,
  });
};
