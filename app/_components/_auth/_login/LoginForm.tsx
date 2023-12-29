"use client";
import { ChangeEvent, useEffect, useState } from "react";
import SubmitButton from "../SubmitButton";
import InputField from "../../_UI/InputField";
import useLogin from "@/app/_hooks/useLogin";
import Link from "next/link";
import SmallLink from "../_register/RegisterButton";
import { ILoginUser } from "@/app/_types/login";

const LoginForm = () => {
  const [inputValues, setInputValues] = useState<ILoginUser>({
    email: "",
    password: "",
  });

  const { handleGetUser } = useLogin();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form
      className="Form work-request"
      style={{ width: "fit-content" }}
      onSubmit={(e) => handleGetUser(e, inputValues)}
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
      <SubmitButton placeHolderValue="Login!" />
      <Link href="/auth/register">
        <SmallLink placeHolderValue="Register" />
      </Link>
    </form>
  );
};

export default LoginForm;
