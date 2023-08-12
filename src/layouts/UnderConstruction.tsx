import { FC, PropsWithChildren } from "react"
import styles from "../assets/css/underConstructionLayout.module.css"

const UnderConstructionLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.underConstructionLayout}>
      <div className={styles.underConstructionLayout__warning}>
        App is under construction
      </div>
      <div className={styles.underConstructionLayout__content}>{children}</div>
    </div>
  )
}

export default UnderConstructionLayout
