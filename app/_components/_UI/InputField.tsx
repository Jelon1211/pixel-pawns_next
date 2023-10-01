"use client";
import { IInputField } from "@/app/_types/login";
import { ChangeEvent } from "react";

const InputField: React.FC<IInputField> = ({
  name,
  type = "text",
  value,
  onChange,
}) => (
  <div className="">
    <input
      className={value ? "has-value" : ""}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
    />
    <label htmlFor={name}>{name.charAt(0).toUpperCase() + name.slice(1)}</label>
  </div>
);

export default InputField;
