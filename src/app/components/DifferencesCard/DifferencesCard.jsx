'use client'
import differencesData from '../../assets/differencesData.json'
import DifferencesCardChart from './DifferencesCardChart'

export default function DifferencesCard() {
  return <div>
  <h1>DifferencesCard</h1>
  <div>
    <DifferencesCardChart data={differencesData} />
  </div>
  </div>
}
