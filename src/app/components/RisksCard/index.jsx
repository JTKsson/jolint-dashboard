import risksData from '../../assets/RisksData.json'
import styles from './risksCard.module.css'

const RisksCard = () => {
  return (
    <div className={styles.risksContainer}>
      {risksData.map((risk, index) => (
        <div className={styles.riskItem}>
          <div className={styles.title}>{risk.title}</div>
          <p>{risk.text}</p>
        </div>
      ))}
    </div>
  )
}

export default RisksCard
