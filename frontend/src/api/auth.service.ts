import { getUserToken } from "../core/utility";
import { apiAxios } from "./api.service";
import { useMutation } from "@tanstack/react-query";

export const LoginUser = async (data: any) => {
  return await apiAxios().post("user/login", data);
};

// export const mutateLogin = () => {
//   return useMutation(LoginUser);
// };

export const SignupUser = async (data: any) => {
  return await apiAxios().post("user/signup", data);
};

// export const mutateSignup = () => {
//   return useMutation(signup);
// };
