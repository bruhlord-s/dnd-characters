import { FC } from "react"
import { motion } from "framer-motion"
import StepBar from "../components/StepBar"
import CloseIcon from "../assets/icons/close.svg"

import styles from "../assets/css/characterCreatorPage.module.css"
import { useNavigate } from "react-router-dom"

const CharacterCreatorPage: FC = () => {
  const navigate = useNavigate()

  const handleExit = () => {
    navigate("/")
  }

  const animation = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  }

  return (
    <motion.div
      className={styles.characterCreatorPage}
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.25 }}
    >
      <header className={styles.characterCreatorPage__header}>
        <h1>Создание персонажа</h1>
        <img src={CloseIcon} alt="close" onClick={handleExit} />
      </header>
      <StepBar />
    </motion.div>
  )
}

export default CharacterCreatorPage
