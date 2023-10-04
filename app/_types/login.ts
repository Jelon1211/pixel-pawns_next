import { ChangeEvent } from "react";

export interface IGetUser {
  id: string;
  email: string;
}

export interface ICreateUser {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface InputValues {
  email: string;
  password: string;
}

export interface IInputField {
  name: string;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
