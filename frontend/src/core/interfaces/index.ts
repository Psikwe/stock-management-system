export type IDashboard = {
  cardTitle: string;
  cardNumber: number;
};

export type ICard = {
  cardName: string;
  cardNumber: number | string;
  className: string;
  cardNumberClassName: string;
};

export type ISidePanel = {
  lists?: string;
  list?: string;
  listLink?: any;
  listName?: string;
};

export type IDasboardData = {
  name: string;
  quantity: number;
};

export type IUser = {
  user: string;
};

export type IUserState = {
  user?: IUser;
};

export type IButton = {
  btnName: string;
  btnClassName: string;
  btnDisabled?: boolean;
  btnOnclick?: () => void;
};

export type IButtonLoading = {
  disable: boolean;
  btnName: string;
  parentClassnName: string;
  firstChildClassName: string;
  btnClassName?: string;
};

export type ISpinner = {
  spinnerName: string;
  parentClassnName: string;
  firstChildClassName: string;
};

export type IInputField = {
  type: string;
  name: string;
  className?: string;
  placeholder?: string;
  id: number;
};

export type IInputLabels = {
  htmlFor: string;
  name: string;
  className: string;
  id: number | string;
};

export type IConfig = {
  apiBaseUrl: string;
};

export type ISignup = {
  fullName: string;
  email: string;
  companyName: string;
  password: string;
};

export type ILogin = {
  email: string;
  password: string;
};

export type IToast = {
  toastMessage: string;
  toastIcon: string;
  toastChildClassName: string;
};
