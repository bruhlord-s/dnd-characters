import { FC } from "react"
import { motion } from "framer-motion"

import styles from "../assets/css/dotsLoading.module.css"

const DotsLoading: FC = () => {
  const dotsContainerVariants = {
    start: {
      transition: { staggerChildren: 0.1 },
    },
    end: {
      transition: { staggerChildren: 0.1 },
    },
  }

  const loadingDotVariants = {
    start: {
      y: "0%",
    },
    end: {
      y: "100%",
    },
  }

  const loadingDotTransition = {
    duration: 0.4,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut",
  }

  return (
    <motion.div
      className={styles.dotsLoading}
      variants={dotsContainerVariants}
      initial="start"
      animate="end"
    >
      <motion.span
        className={styles.dotsLoading__dot}
        variants={loadingDotVariants}
        transition={loadingDotTransition}
      ></motion.span>
      <motion.span
        className={styles.dotsLoading__dot}
        variants={loadingDotVariants}
        transition={loadingDotTransition}
      ></motion.span>
      <motion.span
        className={styles.dotsLoading__dot}
        variants={loadingDotVariants}
        transition={loadingDotTransition}
      ></motion.span>
    </motion.div>
  )
}

export default DotsLoading
