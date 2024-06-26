"use client";

import * as Yup from "yup";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import SubmitButton from "../SubmitButton";
import InputField from "../../_UI/InputField";
import { ICreateUser } from "@/app/_types/login";
import { RegisterSchema } from "@/app/_schemas/register";
import useRegister from "@/app/_hooks/useRegister";
import Link from "next/link";
import SmallLink from "./RegisterButton";
import Loading from "../../_UI/_animation/Loading";

const RegisterForm = () => {
  const [inputValues, setInputValues] = useState<ICreateUser>({
    name: "",
    email: "",
    password: "",
    isActive: true,
  });
  const [errors, setErrors] = useState<ICreateUser>({
    name: "",
    email: "",
    password: "",
    isActive: true,
  });

  const {
    handleRegisterUser,
    isRegistering,
    isRegistered,
    errorMessage,
    registerMessage,
  } = useRegister();

  const handleInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));

    try {
      const fieldSchema = Yup.reach(RegisterSchema, name) as Yup.StringSchema;
      await fieldSchema.validate(value);

      setErrors((prev) => ({ ...prev, [name]: undefined }));
    } catch (error: any) {
      if (error instanceof Yup.ValidationError) {
        setErrors((prev) => ({ ...prev, [name]: error.message }));
      }
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await RegisterSchema.validate(inputValues);
      handleRegisterUser(inputValues);
    } catch (error: any) {
      if (error instanceof Yup.ValidationError) {
        setErrors((prev) => ({ ...prev, [error.path!]: error.message }));
      }
    }
  };

  return (
    <form
      className="Form work-request"
      style={{ width: "fit-content" }}
      onSubmit={handleSubmit}
    >
      <h2 className="Heading">Enter your credentials</h2>
      <div className="work-request--information my-7">
        <div className="information-name mr-4">
          <InputField
            name="name"
            value={inputValues.name || ""}
            onChange={handleInputChange}
          />
          {errors.name && (
            <p className="text-sm	p-2 text-red-400">{errors.name}</p>
          )}
        </div>
        <div className="information-name">
          <InputField
            name="email"
            value={inputValues.email}
            onChange={handleInputChange}
          />
          {errors.email && (
            <p className="text-sm	p-2 text-red-400">{errors.email}</p>
          )}
        </div>
        <div className="information-email ml-4">
          <InputField
            name="password"
            type="password"
            value={inputValues.password}
            onChange={handleInputChange}
          />
          {errors.password && (
            <p className="text-sm	p-2 text-red-400">{errors.password}</p>
          )}
        </div>
      </div>
      {errorMessage && (
        <p className="text-sm	p-2 text-red-400">{errorMessage}</p>
      )}

      {isRegistering ? <Loading text="Loading..." /> : null}

      {!isRegistering &&
        (isRegistered ? (
          registerMessage
        ) : (
          <SubmitButton placeHolderValue="Register!" />
        ))}

      <div className="flex w-full">
        <Link href="/auth/login">
          <SmallLink placeHolderValue="Login" />
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
