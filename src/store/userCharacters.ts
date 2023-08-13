import { atom } from "recoil"
import { Character } from "../types/Character"

// TODO: move mock characters to /api folder
export const userCharactersState = atom({
  key: "UserCharacters",
  default: [] as Character[],
})
