import { FC } from "react"

import styles from "../assets/css/homePage.module.css"
import UserCharacters from "../components/UserCharacters"

const HomePage: FC = () => {
  return (
    <main className={styles.homePage}>
      <h1 className={styles.home__title}>Ваши персонажи</h1>
      <UserCharacters />
    </main>
  )
}

export default HomePage
