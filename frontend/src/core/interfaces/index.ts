export type IDashboard = {
  cardTitle: string;
  cardNumber: number;
};

export type ICard = {
  cardName: string;
  cardNumber: number;
  className: string;
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
