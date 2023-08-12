import { atom } from "recoil"
import { Character } from "../types/Character"

export const characterState = atom({
  key: "Character",
  default: {
    name: "",
    race: "",
    class: "",
    level: 1,
  } as Character,
})
