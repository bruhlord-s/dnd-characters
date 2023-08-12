import { FC } from "react"

import styles from "../assets/css/homePage.module.css"
import Button from "../components/Button"

const HomePage: FC = () => {
  const handleButton = () => {
    console.log("handled")
  }

  return (
    <main className={styles.homePage}>
      <h1 className={styles.home__title}>Ваши персонажи</h1>
      <Button text="Новый персонаж" onClick={handleButton} />
    </main>
  )
}

export default HomePage
