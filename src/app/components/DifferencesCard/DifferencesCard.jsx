'use client'
import differencesData from '../../assets/differencesData.json'
import DifferencesChart from './DifferencesChart'
import DifferencesNav from './DifferencesNav'
import styles from './differencesCard.module.css'

export default function DifferencesCard() {
  return (
    <div className={styles.main}>
      <DifferencesChart data={differencesData} />
    </div>
  )
}
