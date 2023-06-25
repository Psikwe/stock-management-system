import { IInputField } from "../core/interfaces";
import { IInputLabels } from "../core/interfaces";
import axios from "axios";

export const getAxios = (baseURL: string) => {
  const instance = axios.create({ baseURL });
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        window.location.reload();
      }
    }
  );
  return instance;
};

export const getUserToken = (token: string) => {
  try {
    localStorage.setItem("u_token", token);
  } catch (error) {
    console.error(error);
  }
};

export const getUserSession = () => {
  try {
    let token: string | null = localStorage.getItem("u_token");
    if (!token || token === null || token === "") {
      return undefined;
    }
    return token;
  } catch (error) {
    console.error(error);
  }
};

export const clearUserSession = () => {
  localStorage.removeItem("u_token");
};

export const inputClassName: string =
  "bg-gray-50 bg-inputs mt-6 p-2 tablet:w-80 rounded-md spin-button-none outline-0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
const labelClassName: string =
  "pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary";

export const signupInputFields: IInputField[] = [
  {
    type: "text",
    name: "fullName",
    placeholder: "Full Name",
    className: inputClassName,
    id: 2,
  },
  {
    type: "email",
    name: "email",
    placeholder: "Email",
    className: inputClassName,
    id: 1,
  },
  {
    type: "text",
    name: "companyName",
    placeholder: "Company Name",
    className: inputClassName,
    id: 4,
  },
  {
    type: "password",
    name: "password",
    placeholder: "Password",
    className: inputClassName,
    id: 3,
  },
];

export const loginInputFields: IInputField[] = [
  {
    type: "text",
    name: "email",
    placeholder: "Email",
    className: inputClassName,
    id: 2,
  },
  {
    type: "password",
    name: "password",
    placeholder: "Password",
    className: inputClassName,
    id: 1,
  },
];

export const inputLabels: IInputLabels[] = [
  {
    htmlFor: "floatingInput",
    name: "Full Name",
    className: labelClassName,
    id: "Full Name",
  },
  {
    htmlFor: "floatingInput",
    name: "Email",
    className: labelClassName,
    id: "Email",
  },
  {
    htmlFor: "floatingInput",
    name: "Company Name",
    className: labelClassName,
    id: "Company Name",
  },
  {
    htmlFor: "floatingInput",
    name: "Password",
    className: labelClassName,
    id: "Password",
  },
];
