import { prepareCharacters } from "../_lib/prepare";

export const getCharacters = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random/10");

  if (!response.ok) {
    throw new Error("Failure to get your characters");
  }

  const result = await response.json();

  return prepareCharacters(result);
};
