"use client";
import { ChangeEvent, useEffect, useState } from "react";
import SubmitButton from "./submitButton";
import LoginService from "@/app/_services/loginService";

interface InputValues {
  email: string;
  password: string;
}

const Form = () => {
  const [inputValues, setInputValues] = useState<InputValues>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
    console.log(inputValues);
  };

  const handleGetUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const userData = await LoginService.getUser("1");
      console.log(userData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className="text-center py-3 px-8 m-10 rounded-lg wd-fit bg-slate-700 shadow-lg shadow-indigo-500/40 work-request"
      style={{ width: "fit-content" }}
      onSubmit={handleGetUser}
    >
      <h2 className="text-4xl py-5 text-white">Enter your credentials</h2>
      <div className="work-request--information">
        <div className="information-name">
          <input
            className={inputValues.email ? "has-value" : ""}
            name="email"
            type="text"
            value={inputValues.email}
            onChange={(e) => handleInputChange(e)}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="information-email">
          <input
            className={inputValues.password ? "has-value" : ""}
            name="password"
            type="password"
            value={inputValues.password}
            onChange={(e) => handleInputChange(e)}
          />
          <label htmlFor="password">Password</label>
        </div>
      </div>
      <SubmitButton />
    </form>
  );
};

export default Form;
