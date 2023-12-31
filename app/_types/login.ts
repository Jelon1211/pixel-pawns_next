import { ChangeEvent } from "react";

export interface IGetUser {
  id: string;
  email: string;
}

export interface ICreateUser {
  message?: string;
  name: string | undefined;
  email: string;
  password: string;
}
export interface ILoginUser {
  email: string;
  password: string;
}

export interface IInputField {
  name: string;
  type?: string;
  value: string;
  divClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface IButton {
  placeHolderValue: string;
}

export interface ErrorResponse {
  message: string;
}
