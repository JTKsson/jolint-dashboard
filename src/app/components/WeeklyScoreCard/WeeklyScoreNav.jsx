import { useState } from 'react'
import styles from './weeklyScoreCard.module.css'

export default function WeeklyScoreNav({ uniqueWeeks, onSelectWeek }) {
  const filteredWeeks = uniqueWeeks.slice(8)

  const [selectedWeek, setSelectedWeek] = useState('2023-W46')

  const handleChange = (event) => {
    const selectedValue = event.target.value
    setSelectedWeek(selectedValue)
    onSelectWeek(selectedValue)
  }

  return (
    <div className={styles.nav}>
      <div className={styles.title}>
        <h2>Weekly inclusion score</h2>
      </div>
      <div>
        <select value={selectedWeek} onChange={handleChange}>
          {filteredWeeks.map((week) => (
            <option key={week} value={week}>
              Week {week.replace(/202[23]-W/, '')}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
