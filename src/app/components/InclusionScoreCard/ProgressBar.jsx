import styles from './inclusionScoreCard.module.css';

export default function ProgressBar({ percentage }) {
  const progressBarStyle = {
    width: `${percentage}%`,
    height: '20px',
    transition: 'width 0.5s ease-in-out',
  };

  return (
    <div className={styles.progressBar}>
      <div style={progressBarStyle}></div>
    </div>
  );
}
