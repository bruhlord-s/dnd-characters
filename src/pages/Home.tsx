import { FC } from "react";

import styles from "../assets/css/homePage.module.css";
import UserCharacters from "../components/UserCharacters";

const HomePage: FC = () => {
  return (
    <div className={styles.homePage}>
      <h1 className={styles.homePage__title}>Ваши персонажи</h1>
      <UserCharacters />
    </div>
  );
};

export default HomePage;
