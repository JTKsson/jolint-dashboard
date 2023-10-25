'use client'
import React from 'react'
import Image from 'next/image'
import inclusionData from '../../assets/mockData.json'
import styles from './inclusionScoreCard.module.css'
import ChartComponent from './InclusionScoreChart'

export default function InclusionScoreCard() {
  const inclusionDataItem1 = inclusionData[0]
  const inclusionDataItem2 = inclusionData[1]

  const inclusionScore1 = inclusionDataItem1['Inclusion score']
  const inclusionScore2 = inclusionDataItem2['Inclusion score']

  const percentageChange =
    ((inclusionScore2 - inclusionScore1) / inclusionScore1) * 100

  const roundedInclusionScore1 = Math.ceil(inclusionScore1)
  const roundedInclusionScore2 = Math.ceil(inclusionScore2)

  const progressBarStyle = {
    width: `${roundedInclusionScore1}%`,
    height: '20px',
    transition: 'width 0.5s ease-in-out',
  }

  return (
    <div className={styles.main}>
      <div className={styles.leftContainer}>
        <h1>Inclusion Score</h1>
        <p>{roundedInclusionScore1}</p>
        <div className={styles.progressBar}>
          <div style={progressBarStyle}></div>
        </div>
        <div>
          <Image
            src={
              percentageChange > 0
                ? '/images/positive-arrow-green-icon.svg'
                : '/images/negative-arrow-red-icon.svg'
            }
            alt={percentageChange > 0 ? 'Green arrow icon' : 'Red arrow icon'}
            width={20}
            height={20}
            className={styles.arrow}
          />
          <p>
            {percentageChange > 0
              ? `+${percentageChange.toFixed(2)}%`
              : `-${Math.abs(percentageChange).toFixed(2)}%`}{' '}
            since last month
          </p>
        </div>
        <div>
          <Image
            src="/images/positive-arrow-green-icon.svg"
            alt="Green arrow icon"
            width={20}
            height={20}
            className={styles.arrow}
          />
          <p>above benchmark</p>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <h2>Timeline</h2>
        <ul>
          <li>Company Average</li>
          <li>Team HR</li>
          <button>Team HR</button>
        </ul>
        <ChartComponent data={inclusionData} />
      </div>
    </div>
  )
}
