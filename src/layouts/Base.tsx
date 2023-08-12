import { FC, PropsWithChildren } from "react"
import styles from "../assets/css/baseLayout.module.css"

// base styles, variables
import "../assets/css/base.css"

const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.baseLayout}>{children}</div>
}

export default BaseLayout
