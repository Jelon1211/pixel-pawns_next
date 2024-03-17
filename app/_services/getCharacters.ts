import axios from "axios";
import getCookie from "../_lib/getCookie";

export const getCharacters = async () => {
  const bearer = getCookie("bearerToken");

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_ADRESS}/pawns`,
    {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    }
  );

  if (response.status !== 200) {
    return false;
  }

  return await response.data;
};
