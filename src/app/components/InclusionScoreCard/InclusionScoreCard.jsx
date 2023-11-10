'use client'
import { useState } from 'react'
import inclusionData from '../../assets/mockData.json'
import benchmarkData from '../../assets/mockData.json'
import styles from './inclusionScoreCard.module.css'
import ChartComponent from './InclusionScoreChart'
import ProgressBar from './ProgressBar'
import ScoreChangeArrows from './ScoreChangeArrows'
import InclusionScoreNav from './InclusionScoreNav'

export default function InclusionScoreCard() {
  const [selectedTeam, setSelectedTeam] = useState('')
  const inclusionDataItem1 = inclusionData[8] // Oktober
  const inclusionDataItem2 = inclusionData[7] // September
  const inclusionScore1 = inclusionDataItem1['Inclusion score']
  const inclusionScore2 = inclusionDataItem2['Inclusion score']

  const benchmarkDataItem = benchmarkData[1]
  const benchmarkItem = benchmarkDataItem['Benchmark']
  const benchmark = inclusionScore1 - benchmarkItem

  const lastMonth = Math.ceil(inclusionScore1 - inclusionScore2)
  const roundedInclusionScore1 = Math.floor(inclusionScore1)
  const teamName = inclusionDataItem1['Team']

  const handleTeamSelect = (team) => {
    setSelectedTeam(team)
  }

  return (
    <div className={styles.main}>
      <div className={styles.leftContainer}>
        <h1>Inclusion Score</h1>
        <div className={styles.progessBarResult}>
          <div className={styles.result}>
            <h3>{roundedInclusionScore1}</h3>
          </div>
          <ProgressBar percentage={roundedInclusionScore1} />
        </div>
        <ScoreChangeArrows lastMonth={lastMonth} benchmark={benchmark} />
      </div>

      <div className={styles.rightContainer}>
        <InclusionScoreNav
          teamName={teamName}
          jsonData={inclusionData}
          onTeamSelect={handleTeamSelect}
        />
        <ChartComponent data={inclusionData} selectedTeam={selectedTeam} />
      </div>
    </div>
  )
}
