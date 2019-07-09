import React from "react"
import styles from "./StyleWrapper.module.css"

const StyleWrapper = props => {
  const { children } = props
  return <div className={styles.center}>{children || null}</div>
}

export default StyleWrapper
