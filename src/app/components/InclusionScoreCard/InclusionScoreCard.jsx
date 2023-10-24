import inclusionData from '@/app/assets/mockData.json';
import styles from './inclusionScoreCard.module.css';
import Image from 'next/image';

export default function Frame() {
  // Access the data for the first and second items in the JSON array
  const inclusionDataItem1 = inclusionData[0];
  const inclusionDataItem2 = inclusionData[1];

  // Access the "Inclusion score" from the JSON data for both items
  const inclusionScore1 = inclusionDataItem1['Inclusion score'];
  const inclusionScore2 = inclusionDataItem2['Inclusion score'];

  // Calculate the percentage change
  const percentageChange = ((inclusionScore2 - inclusionScore1) / inclusionScore1) * 100;

  // Round up the decimal to the nearest integer
  const roundedInclusionScore1 = Math.ceil(inclusionScore1);
  const roundedInclusionScore2 = Math.ceil(inclusionScore2);

  // Define a CSS style for the progress bar based on the first value
  const progressBarStyle = {
    width: `${roundedInclusionScore1}%`,
    height: '20px',
    transition: 'width 0.5s ease-in-out',
  };

  return (
    <div>
      <h1>Inclusion Score</h1>
      <p>{roundedInclusionScore1}</p>
      <div className={styles.progressBar}>
        <div style={progressBarStyle}></div>
      </div>
      <div>
        <Image
          src={percentageChange > 0 ? '/images/positive-arrow-green-icon.svg' : '/images/negative-arrow-red-icon.svg'}
          alt={percentageChange > 0 ? "Green arrow icon" : "Red arrow icon"}
          width={20}
          height={20}
          className={styles.arrow}
        />
        <p>
          {percentageChange > 0 ? `+${percentageChange.toFixed(2)}%` : `-${Math.abs(percentageChange).toFixed(2)}%`} since last month
        </p>
      </div>
      <div>
      <Image
          src={'/images/positive-arrow-green-icon.svg'}
          alt={'Green arrow icon'}
          width={20}
          height={20}
          className={styles.arrow}
        />
        <p>above benchmark</p>
      </div>
    </div>
  );
}
