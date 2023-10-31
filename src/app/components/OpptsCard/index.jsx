import opptsData from '../../assets/opptsData.json'
import styles from './opptsCard.module.css'

const OpptsCard = () => {
  return (
    <div className={styles.opptsContainer}>
      {opptsData.map((oppt, index) => (
        <div>
          <div className={styles.title}>{oppt.title}</div>
          <p>{oppt.text}</p>
        </div>
      ))}
    </div>
  )
}

export default OpptsCard
