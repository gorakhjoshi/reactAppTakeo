import shuffle from "lodash.shuffle";
import data from "./data";

export type CharacterType = {
  alignment: string;
  combat: number;
  durability: number;
  intelligence: number;
  name: string;
  power: number;
  speed: number;
  strength: number;
  total: number;
};

export const fetchCharacter = (): Promise<CharacterType> => {
  const [character] = shuffle(data);
  return Promise.resolve(character);
};
