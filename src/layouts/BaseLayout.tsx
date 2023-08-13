import { FC, PropsWithChildren } from "react"
import "../assets/css/base.css"
import styles from "../assets/css/baseLayout.module.css"

const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.baseLayout}>{children}</div>
}

export default BaseLayout
