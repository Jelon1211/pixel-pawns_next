import axios from "axios";
import { prepareCharacters } from "../_lib/prepare";

export const getCharacters = async () => {
  const response = await axios("https://dog.ceo/api/breeds/image/random/15");

  if (!response.status) {
    throw new Error("Failure to get your characters");
  }

  return prepareCharacters(response.data);
};
