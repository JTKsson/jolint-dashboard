'use client'
import differencesData from '../../assets/differencesData.json'
import DifferencesChart from './DifferencesChart'
import DifferencesNav from './DifferencesNav'

export default function DifferencesCard() {
  return (
    <div>
        <DifferencesChart data={differencesData} />
    </div>
  )
}
