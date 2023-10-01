import { ChangeEvent } from "react";

export interface User {
  id: string;
  name: string;
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
