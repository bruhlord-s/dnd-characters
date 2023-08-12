import { FC, PropsWithChildren } from "react"
import "../assets/css/base.css"
import styles from "../assets/css/baseLayout.module.css"

const BaseLayout: FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  return <div className={styles.baseLayout}>{children}</div>
}

export default BaseLayout
