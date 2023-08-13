import { FC } from "react"

import styles from "../assets/css/loadingError.module.css"
import RetryIcon from "../assets/icons/retry.svg"

type LoadingErrorProps = {
  onRetry?: () => any
}

const LoadingError: FC<LoadingErrorProps> = ({ onRetry }) => {
  return (
    <div className={styles.loadingError}>
      <p className={styles.loadingError__message}>Что-то пошло не так</p>
      {onRetry && (
        <span className={styles.loadingError__retry} onClick={onRetry}>
          <img
            className={styles.loadingError__retryIcon}
            src={RetryIcon}
            alt="retry"
          />
          <p className={styles.loadingError__retryText}>перезагрузить</p>
        </span>
      )}
    </div>
  )
}

export default LoadingError
