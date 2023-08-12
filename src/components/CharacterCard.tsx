import { FC } from "react"
import { Character } from "../types/Character"

import styles from "../assets/css/characterCard.module.css"

type CharacterCardProps = {
  character: Character
}

const CharacterCard: FC<CharacterCardProps> = ({
  character,
}: CharacterCardProps) => {
  return (
    <div className={styles.characterCard}>
      <div className={styles.characterCard__top}>
        <span className={styles.characterCard__name}>{character.name}</span>
        <span className={styles.characterCard__level}>
          Ур. {character.level}
        </span>
      </div>
      <div className={styles.characterCard__bottom}>
        <span className={styles.characterCard__raceClass}>
          {character.race} {character.class}
        </span>
      </div>
    </div>
  )
}

export default CharacterCard
