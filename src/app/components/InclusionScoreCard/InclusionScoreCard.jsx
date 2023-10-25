'use client'
import inclusionData from '../../assets/mockData.json';
import styles from './inclusionScoreCard.module.css';
import ChartComponent from './InclusionScoreChart';
import ProgressBar from './ProgressBar';
import PercentageChangeArrows from './PercentageChangeArrows';

export default function InclusionScoreCard() {
  const inclusionDataItem1 = inclusionData[0];
  const inclusionDataItem2 = inclusionData[1];
  const inclusionScore1 = inclusionDataItem1['Inclusion score'];
  const inclusionScore2 = inclusionDataItem2['Inclusion score'];
  const percentageChange = ((inclusionScore2 - inclusionScore1) / inclusionScore1) * 100;
  const roundedInclusionScore1 = Math.ceil(inclusionScore1);
  const teamName = inclusionDataItem1['Team'];

  return (
    <div className={styles.main}>

      <div className={styles.leftContainer}>
        <h1>Inclusion Score</h1>
        <p>{roundedInclusionScore1}</p>
        <ProgressBar percentage={roundedInclusionScore1} />
        <PercentageChangeArrows percentageChange={percentageChange} />
      </div>

      <div className={styles.rightContainer}>
        <div className={styles.nav}>
          <div className={styles.title}>
            <h2>Timeline</h2>
          </div>
          <div className={styles.navItems}>
            <div className={styles.item}>
              <p>Company Average</p>
            </div>
            <div className={styles.item}>
              <p>Team {teamName}</p>
            </div>
            <div className={styles.item}>
              <button>Team {teamName}</button>
            </div>
          </div>
        </div>
        <ChartComponent data={inclusionData} />
      </div>

    </div> 
  );
}
