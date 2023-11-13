import { useState } from 'react'
import styles from './inclusionScoreCard.module.css'
import { BsFillCircleFill } from 'react-icons/bs'

export default function InclusionScoreNav({
  teamName,
  jsonData,
  onTeamSelect,
}) {
  const uniqueTeams = [
    ...new Set(
      jsonData
        .filter((item) => item.Team !== 'Company average')
        .map((item) => item.Team),
    ),
  ]
  const [selectedTeam, setSelectedTeam] = useState(
    uniqueTeams.length > 0 ? uniqueTeams[0] : '',
  )

  const handleTeamChange = (event) => {
    const team = event.target.value
    setSelectedTeam(team)
    onTeamSelect(team)
  }

  return (
    <div className={styles.nav}>
      <div className={styles.title}>
        <h2>Timeline</h2>
      </div>
      <div className={styles.navItems}>
        <div className={styles.item}>
          <BsFillCircleFill
            className={styles.dot}
            size={10}
            style={{
              color: 'var(--c-mellow-blue)',
              marginRight: '5px',
            }}
          />
          <span>Company Average</span>
        </div>
        <div className={styles.item}>
          <BsFillCircleFill
            className={styles.dot}
            size={10}
            style={{
              color: 'var(--c-bright-blue)',
              marginRight: '5px',
            }}
          />
          <span>{selectedTeam || teamName}</span>
        </div>
        <div className={styles.dropdown}>
          <select value={selectedTeam} onChange={handleTeamChange}>
            {uniqueTeams.map((team, index) => (
              <option key={index} value={team}>
                {team}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}
