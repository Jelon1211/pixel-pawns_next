"use client";
import { ChangeEvent, useEffect, useState } from "react";
import SubmitButton from "../SubmitButton";
import InputField from "../../_UI/InputField";
import useLogin from "@/app/_hooks/useLogin";
import Link from "next/link";
import SmallLink from "../_register/RegisterButton";
import { ILoginUser } from "@/app/_types/login";
import Loading from "../../_UI/_animation/Loading";
import H2 from "../../_UI/_typography/H2";
import axios from "axios";

const LoginForm = () => {
  const [inputValues, setInputValues] = useState<ILoginUser>({
    email: "",
    password: "",
  });

  const { handleAuth, error, isLoading } = useLogin();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form
      className="Form work-request"
      style={{ width: "fit-content" }}
      onSubmit={(e) => handleAuth(e, inputValues)}
    >
      <H2 text="Enter your credentials" className="Heading" />
      <div className="work-request--information my-8">
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
      {isLoading ? (
        <>
          <Loading text="Loading..." />
        </>
      ) : (
        <>
          <SubmitButton placeHolderValue="Login!" />
          <Link href="/auth/register">
            <SmallLink placeHolderValue="Register" />
          </Link>
          {error && <div className="text-sm p-4 text-red-400">{error}</div>}
        </>
      )}
    </form>
  );
};

export default LoginForm;
