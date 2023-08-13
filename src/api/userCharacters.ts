import { Character } from "../types/Character"

export const getUserCharacters = async (): Promise<Character[]> => {
  return [
    {
      name: "Масюня",
      race: "Человек",
      class: "Паладин",
      level: 1,
    },
  ] as Character[]
}
