import axios, { AxiosResponse } from "axios";
import { IInputCreateValues } from "../_types/game";

export default class characterService {
  static async createCharacter(characterData: IInputCreateValues) {
    return characterData;
  }
}
