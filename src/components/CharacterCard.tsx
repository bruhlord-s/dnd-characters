import { FC } from "react"
import { Character } from "../types/Character"

import styles from "../assets/css/characterCard.module.css"

type CharacterCardProps = {
  character: Character
}

const CharacterCard: FC<CharacterCardProps> = ({
  character,
}: CharacterCardProps) => {
  return <div></div>
}

export default CharacterCard
