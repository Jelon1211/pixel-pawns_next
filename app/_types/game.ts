export interface CharacterTileProps {
  _id: string;
  index: number;
  thumbnail: string;
  name: string;
  description: string;
  isDead: boolean;
}

export interface IInputCreateValues {
  name: string;
  race: string;
  weapon: string;
  attributes: string;
}
