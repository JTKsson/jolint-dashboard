import styles from './weeklyScoreCard.module.css'

export default function ProgressBar({ percentage, arrowColor }) {
  const progressBarStyle = {
    width: `${percentage}%`,
    backgroundColor: arrowColor,
  }

  return (
    <div className={styles.progressBar}>
      <div className={styles.progress} style={progressBarStyle}></div>
      <div className={styles.arrow} style={{ borderColor: arrowColor }}></div>
    </div>
  )
}
