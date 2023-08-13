import { atom } from "recoil"
import { Character } from "../types/Character"

export const userCharactersState = atom({
  key: "UserCharacters",
  default: [] as Character[],
})
