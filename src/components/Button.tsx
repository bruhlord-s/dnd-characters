import { FC } from "react"

import styles from "../assets/css/button.module.css"

type ButtonProps = {
  text: string
  onClick: () => any
}

const Button: FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
