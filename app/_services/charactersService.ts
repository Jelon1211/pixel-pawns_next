import axios, { AxiosResponse } from "axios";
import { IInputCreateValues } from "../_types/game";
import { preparePawn } from "../_lib/preparePawn";
import getCookie from "../_lib/getCookie";

export default class characterService {
  static async createCharacter(characterData: IInputCreateValues) {
    const description = preparePawn(characterData);
    const name = characterData.name;
    const bearer = getCookie("bearerToken");

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_ADRESS}/pawns`,
        { description, name },
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${bearer}`,
          },
        }
      );
      return response.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
