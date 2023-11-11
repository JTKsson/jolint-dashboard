'use client'
import Image from 'next/image'
import inclusionData from '../../assets/inclusionData.json'
import styles from './weeklyScoreCard.module.css'
import ScoreChangeArrows from './ScoreChangeArrows'
import WeeklyInclusionScoreNav from './WeeklyScoreNav'
import ProgressBar from './ProgressBar'

export default function WeeklyInclusionScoreCard() {
  const inclusionDataItem1 = inclusionData[8] // Oktober
  const inclusionDataItem2 = inclusionData[7] // September
  const inclusionScore1 = inclusionDataItem1['Team Inclusion']
  const inclusionScore2 = inclusionDataItem2['Team Inclusion']
  const inclusionScore3 = inclusionDataItem1['Cross-Functional Inclusion']
  const inclusionScore4 = inclusionDataItem2['Cross-Functional Inclusion']
  const inclusionScore5 = inclusionDataItem1['Informal Influence']
  const inclusionScore6 = inclusionDataItem2['Informal Influence']
  const inclusionScore7 = inclusionDataItem1['Work Habits']
  const inclusionScore8 = inclusionDataItem2['Work Habits']

  const percentageChange1 =
    ((inclusionScore1 - inclusionScore2) / inclusionScore2) * 100
  const percentageChange2 =
    ((inclusionScore3 - inclusionScore4) / inclusionScore4) * 100
  const percentageChange3 =
    ((inclusionScore5 - inclusionScore6) / inclusionScore6) * 100
  const percentageChange4 =
    ((inclusionScore7 - inclusionScore8) / inclusionScore8) * 100
  const thisWeek = inclusionDataItem1['ISO_Week']
  const roundedInclusionScore1 = Math.floor(inclusionScore1)
  const roundedInclusionScore2 = Math.floor(inclusionScore3)
  const roundedInclusionScore3 = Math.floor(inclusionScore5)
  const roundedInclusionScore4 = Math.floor(inclusionScore7)
  const isPositive1 = percentageChange1 > 0
  const isPositive2 = percentageChange2 > 0
  const isPositive3 = percentageChange3 > 0
  const isPositive4 = percentageChange4 > 0

  return (
    <div className={styles.main}>
      <WeeklyInclusionScoreNav thisWeek={thisWeek} />
      <div className={styles.rowOne}>
        <div className={styles.topRowContainer}>
          <div className={styles.infoLeftContainer}>
            <p>Team interactions</p>
            <div className={styles.iconContainer}>
              <Image
                src="/images/info-icon.svg"
                alt="Info icon"
                width={15}
                height={15}
                className={styles.icon}
              />
              <div className={styles.tooltip}>
                <p>
                  <b>Team Interactions:</b> Evaluates the frequency and quality
                  of communications between team members.
                </p>
              </div>
            </div>
          </div>
          <ScoreChangeArrows lastMonth={percentageChange1} />
        </div>

        <div className={styles.progressBarContent}>
          <ProgressBar
            percentage={roundedInclusionScore1}
            isPositive={isPositive1}
          />
          <div className={styles.result}>
            <p>{roundedInclusionScore1}</p>
          </div>
        </div>
      </div>
      <div className={styles.rowTwo}>
        <div className={styles.topRowContainer}>
          <div className={styles.infoLeftContainer}>
            <p>Cross-functional interaction</p>
            <div className={styles.iconContainer}>
              <Image
                src="/images/info-icon.svg"
                alt="Info icon"
                width={15}
                height={15}
                className={styles.icon}
              />
              <div className={styles.tooltip}>
                <p>
                  <b>Cross-functional Interaction:</b> Measures the engagement
                  between different departments or functions, showing how well
                  teams are working cross-functionally
                </p>
              </div>
            </div>
          </div>
          <ScoreChangeArrows lastMonth={percentageChange2} />
        </div>

        <div className={styles.progressBarContent}>
          <ProgressBar
            percentage={roundedInclusionScore2}
            isPositive={isPositive2}
          />
          <div className={styles.result}>
            <p>{roundedInclusionScore2}</p>
          </div>
        </div>
      </div>
      <div className={styles.rowThree}>
        <div className={styles.topRowContainer}>
          <div className={styles.infoLeftContainer}>
            <p>Informal influence</p>
            <div className={styles.iconContainer}>
              <Image
                src="/images/info-icon.svg"
                alt="Info icon"
                width={15}
                height={15}
                className={styles.icon}
              />
              <div className={styles.tooltip}>
                <p>
                  <b>Informal Influence:</b> Unofficial impact individuals have
                  within the organisation.
                </p>
              </div>
            </div>
          </div>
          <ScoreChangeArrows lastMonth={percentageChange3} />
        </div>

        <div className={styles.progressBarContent}>
          <ProgressBar
            percentage={roundedInclusionScore3}
            isPositive={isPositive3}
          />
          <div className={styles.result}>
            <p>{roundedInclusionScore3}</p>
          </div>
        </div>
      </div>
      <div className={styles.rowFour}>
        <div className={styles.topRowContainer}>
          <div className={styles.infoLeftContainer}>
            <p>Work habits</p>
            <div className={styles.iconContainer}>
              <Image
                src="/images/info-icon.svg"
                alt="Info icon"
                width={15}
                height={15}
                className={styles.icon}
              />
              <div className={styles.tooltip}>
                <p>
                  <b>Work Habits:</b> Assesses the flexibility and inclusivity
                  of work routines, such as meeting times, length of days, and
                  work on weekends.
                </p>
              </div>
            </div>
          </div>
          <ScoreChangeArrows lastMonth={percentageChange4} />
        </div>

        <div className={styles.progressBarContent}>
          <ProgressBar
            percentage={roundedInclusionScore4}
            isPositive={isPositive4}
          />
          <div className={styles.result}>
            <p>{roundedInclusionScore4}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
