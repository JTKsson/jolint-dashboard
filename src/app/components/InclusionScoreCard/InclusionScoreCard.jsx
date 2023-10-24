import inclusionData from '@/app/assets/mockData.json';
import styles from './inclusionScoreCard.module.css'

export default function Frame() {
  // Access the "Inclusion score" from the imported JSON data
  const inclusionScore = inclusionData['Inclusion score'];

  // Round up the decimal to the nearest integer
  const roundedInclusionScore = Math.ceil(inclusionScore);

  // Define a CSS style for the progress bar
  const progressBarStyle = {
    width: `${roundedInclusionScore}%`,
    backgroundColor: 'blue',
    height: '20px',
    transition: 'width 0.5s ease-in-out',
  };

  return (
    <div>
      <h1>Inclusion Score</h1>
      <p>{roundedInclusionScore}</p>
      <div className={styles.progressBar}>
        <div style={progressBarStyle}></div>
      </div>
    </div>
  );
}
