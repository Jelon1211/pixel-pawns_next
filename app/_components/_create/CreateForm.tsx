"use client";
import * as Yup from "yup";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import InputField from "../_UI/InputField";
import SubmitButton from "../_auth/SubmitButton";
import { IInputCreateValues } from "@/app/_types/game";
import ProgressBar from "./ProgressBar";
import { CreateCharacterSchema } from "@/app/_schemas/createCharacter";
import { useRouter } from "next/navigation";

const CreateForm = () => {
  const [inputValues, setInputValues] = useState<IInputCreateValues>({
    name: "",
    race: "",
    weapon: "",
    attributes: "",
  });
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [errors, setErrors] = useState({ name: "" });
  const [progress, setProgress] = useState<number>(0);

  const router = useRouter();

  const validateInput = async (name: string, value: string) => {
    try {
      const fieldSchema = Yup.reach(
        CreateCharacterSchema,
        name
      ) as Yup.StringSchema;
      await fieldSchema.validate(value);

      setErrors((prev) => ({ ...prev, [name]: "" }));
    } catch (error: any) {
      if (error instanceof Yup.ValidationError) {
        setErrors((prev) => ({ ...prev, [name]: error.message }));
      }
    }
  };

  const handleInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
    validateInput(name, value);
  };

  const handleCreateCharacter = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await CreateCharacterSchema.validate(inputValues);
      setIsCreating(true);
    } catch (error: any) {
      if (error instanceof Yup.ValidationError) {
        setErrors((prev) => ({ ...prev, [error.path!]: error.message }));
      }
    }

    let progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(progressInterval);
          router.push(`/game/created?name=${inputValues.name}`);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 100);
  };

  return (
    <>
      {isCreating ? (
        <ProgressBar progress={progress} />
      ) : (
        <form
          className="Form work-request"
          style={{ width: "fit-content" }}
          onSubmit={(e) => handleCreateCharacter(e)}
        >
          <h2 className="Heading">Enter your character details!</h2>
          <div
            className="work-request--information flex-col items-center gap-8"
            style={{ margin: "30px 0 30px 0" }}
          >
            <div className="information-name w-full">
              <InputField
                name="name"
                value={inputValues.name}
                onChange={handleInputChange}
              />
              {errors.name && (
                <p className="text-sm p-2 text-red-400">{errors.name}</p>
              )}
            </div>
            <div className="information-name w-full">
              <InputField
                name="race"
                value={inputValues.race}
                onChange={handleInputChange}
              />
            </div>
            <div className="information-name w-full">
              <InputField
                name="weapon"
                value={inputValues.weapon}
                onChange={handleInputChange}
              />
            </div>
            <div className="information-name w-full">
              <InputField
                name="attributes"
                value={inputValues.attributes}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <SubmitButton placeHolderValue="Create!" />
        </form>
      )}
    </>
  );
};

export default CreateForm;
