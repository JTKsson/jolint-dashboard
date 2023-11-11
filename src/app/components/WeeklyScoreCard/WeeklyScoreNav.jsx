import { useState } from 'react'
import styles from './weeklyScoreCard.module.css'
import Image from 'next/image'

export default function InclusionScoreCard({ thisWeek }) {

  return (
    <div className={styles.nav}>
      <div className={styles.title}>
        <h2>Weekly inclusion score</h2>
      </div>
      <div>
        <select>
          <option>This week</option>
        </select>
      </div>
    </div>
  )
}
