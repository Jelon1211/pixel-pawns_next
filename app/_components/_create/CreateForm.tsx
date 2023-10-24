"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import InputField from "../_UI/InputField";
import SubmitButton from "../_auth/SubmitButton";

const CreateForm = () => {
  const [inputValues, setInputValues] = useState({
    name: "",
    race: "",
    weapon: "",
    attributes: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCreateCharacter = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("create character");
  };

  return (
    <>
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
    </>
  );
};

export default CreateForm;
