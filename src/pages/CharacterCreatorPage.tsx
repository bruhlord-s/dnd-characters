import { FC } from "react"
import StepBar from "../components/StepBar"
import CloseIcon from "../assets/icons/close.svg"

import styles from "../assets/css/characterCreatorPage.module.css"

const CharacterCreatorPage: FC = () => {
  return (
    <div className={styles.characterCreatorPage}>
      <header className={styles.characterCreatorPage__header}>
        <h1>Создание персонажа</h1>
        <img src={CloseIcon} alt="close" />
      </header>
      <StepBar />
    </div>
  )
}

export default CharacterCreatorPage
