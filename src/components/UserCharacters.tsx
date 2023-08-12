import { FC } from "react"

import styles from "../assets/css/userCharacters.module.css"
import Button from "./Button"
import { useRecoilValue } from "recoil"
import { userCharactersState } from "../store/userCharacters"
import CharacterCard from "./CharacterCard"

const UserCharacters: FC = () => {
  const characters = useRecoilValue(userCharactersState)

  const handleNewButton = () => {
    console.log("handled")
  }

  // TODO: fix overflow-y, so title and button fixed at the top
  return (
    <div className={styles.userCharacters}>
      <Button text="Новый персонаж" onClick={handleNewButton} />
      <div className={styles.userCharacters__list}>
        {characters.map((character, i) => (
          <CharacterCard character={character} key={i} />
        ))}
      </div>
    </div>
  )
}

export default UserCharacters
