"use client";
import { ChangeEvent, useEffect, useState } from "react";
import SubmitButton from "./submitButton";
import InputField from "../_UI/InputField";
import useLogin from "@/app/_hooks/useLogin";
import { InputValues } from "@/app/_types/login";

const Form = () => {
  const [inputValues, setInputValues] = useState<InputValues>({
    email: "",
    password: "",
  });

  const { handleGetUser } = useLogin();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
    console.log(inputValues);
  };

  return (
    <form
      className="Form work-request"
      style={{ width: "fit-content" }}
      onSubmit={handleGetUser}
    >
      <h2 className="Heading">Enter your credentials</h2>
      <div
        className="work-request--information"
        style={{ margin: "30px 0 30px 0" }}
      >
        <div className="information-name">
          <InputField
            name="email"
            value={inputValues.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="information-email">
          <InputField
            name="password"
            type="password"
            value={inputValues.password}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <SubmitButton />
    </form>
  );
};

export default Form;
