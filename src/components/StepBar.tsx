import { FC } from "react"

import styles from "../assets/css/stepBar.module.css"

const StepBar: FC = () => {
  return (
    <div className={styles.stepBar}>
      <div className={styles.stepBar__data}>
        <p className={styles.stepBar__step}>Шаг 1/9</p>
        <p className={styles.stepBar__stepName}>Имя и предыстория</p>
      </div>
      <div className={styles.stepBar__bar}>
        <div className={styles.stepBar__progress}></div>
      </div>
    </div>
  )
}

export default StepBar
