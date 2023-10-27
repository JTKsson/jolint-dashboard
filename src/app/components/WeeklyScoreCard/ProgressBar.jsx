import styles from './weeklyScoreCard.module.css'

export default function ProgressBar({ percentage, isPositive }) {
  const progressBarStyle = {
    width: `${percentage}%`,
    height: '17px',
    transition: 'width 0.5s ease-in-out',
    backgroundColor: isPositive ? 'var(--c-green)' : 'var(--c-light-red)',
  }

  return (
    <div className={styles.progressBar}>
      <div style={progressBarStyle}></div>
    </div>
  )
}
