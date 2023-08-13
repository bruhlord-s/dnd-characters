import { FC, useEffect, useState } from "react"

import styles from "../assets/css/userCharacters.module.css"
import Button from "./Button"
import { useRecoilState } from "recoil"
import { userCharactersState } from "../store/userCharacters"
import CharacterCard from "./CharacterCard"
import { getUserCharacters } from "../api/userCharacters"
import EmptyUserCharacters from "./EmptyUserCharacters"
import LoadingError from "./LoadingError"
import DotsLoading from "./DotsLoading"
import { useNavigate } from "react-router-dom"

const UserCharacters: FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [characters, setCharacters] = useRecoilState(userCharactersState)
  const navigate = useNavigate()

  const loadCharacters = async () => {
    setIsError(false)

    // TODO: remove timeout when mock will be replaces
    //       with actual request
    setTimeout(() => {
      getUserCharacters()
        .then((r) => {
          setCharacters(r)
          setIsLoading(false)
        })
        .catch((e) => {
          setIsError(true)
          setIsLoading(false)
        })
    }, 1500)
  }

  useEffect(() => {
    loadCharacters()
  }, [])

  const handleNewButton = () => {
    navigate("/creator")
  }

  return (
    <div className={styles.userCharacters}>
      <Button text="Новый персонаж" onClick={handleNewButton} />
      <div className={styles.userCharacters__list}>
        {characters.length <= 0 && isLoading && <DotsLoading />}

        {isError && <LoadingError onRetry={loadCharacters} />}

        {characters.length <= 0 && !isLoading && !isError && (
          <EmptyUserCharacters />
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
