import { FC, useEffect, useState } from "react"

import styles from "../assets/css/userCharacters.module.css"
import Button from "./Button"
import { useRecoilState } from "recoil"
import { userCharactersState } from "../store/userCharacters"
import CharacterCard from "./CharacterCard"
import { getUserCharacters } from "../api/userCharacters"
import EmptyUserCharacters from "./EmptyUserCharacters"
import LoadingError from "./LoadingError"

const UserCharacters: FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [characters, setCharacters] = useRecoilState(userCharactersState)

  const loadCharacters = async () => {
    setIsError(false)
    setIsLoading(true)

    getUserCharacters()
      .then((r) => setCharacters(r))
      .catch((e) => setIsError(true))
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    loadCharacters()
  }, [])

  const handleNewButton = () => {
    console.log("handled")
  }

  // TODO: fix overflow-y, so title and button fixed at the top
  return (
    <div className={styles.userCharacters}>
      <Button text="Новый персонаж" onClick={handleNewButton} />
      <div className={styles.userCharacters__list}>
        {characters.length <= 0 && !isLoading && !isError && (
          <EmptyUserCharacters />
        )}

        {characters.length <= 0 && !isLoading && isError && (
          <LoadingError onRetry={loadCharacters} />
        )}

        {characters.length > 0 &&
          characters.map((character, i) => (
            <CharacterCard character={character} key={i} />
          ))}
      </div>
    </div>
  )
}

export default UserCharacters
