import { FC } from "react";

import styles from "../assets/css/userCharacters.module.css";
import { useRecoilState } from "recoil";
import { userCharactersState } from "../store/userCharacters";
import CharacterCard from "./CharacterCard";

const UserCharacters: FC = () => {
  const [characters, setCharacters] = useRecoilState(userCharactersState);

  return (
    <div className={styles.homePage__characters}>
      {characters.map((character) => (
        <CharacterCard character={character} />
      ))}
    </div>
  );
};

export default UserCharacters;
