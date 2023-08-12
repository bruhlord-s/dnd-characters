import { atom } from "recoil"
import { Character } from "../types/Character"

// TODO: move mock characters to /api folder
export const userCharactersState = atom({
  key: "UserCharacters",
  default: [
    {
      name: "Амогусер",
      race: "Человек",
      class: "Паладин",
      level: 1,
    },
    {
      name: "Масюня",
      race: "Эльф",
      class: "Бард",
      level: 2,
    },
    {
      name: "Масюня",
      race: "Эльф",
      class: "Бард",
      level: 2,
    },
    {
      name: "Масюня",
      race: "Эльф",
      class: "Бард",
      level: 2,
    },
    {
      name: "Масюня",
      race: "Эльф",
      class: "Бард",
      level: 2,
    },
  ] as Character[],
})
