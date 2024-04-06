import { IInputCreateValues } from "../_types/game";

export const preparePawn = (characterData: IInputCreateValues) => {
  const preparedCharacterData = `${characterData.race} with ${characterData.attributes} holding ${characterData.weapon}`;

  return preparedCharacterData.toLocaleLowerCase();
};
