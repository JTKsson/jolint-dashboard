'use client'
import Image from 'next/image'
import trendsData from '../../assets/trendsData.json'
import styles from './trendsCard.module.css'

const TrendsCard = () => {
  return (
    <div className={styles.main}>
      <div className={styles.trendContainer}>
        {trendsData.map((trend, index) => (
          <div className={styles.trendItem} key={index}>
            <div className={styles.img}>
              <Image
                src={
                  trend.trend === 'pos'
                    ? '/images/positive-arrow-green-icon.svg'
                    : '/images/negative-arrow-red-icon.svg'
                }
                alt={
                  trend.trend === 'pos'
                    ? 'Positive trend arrow icon'
                    : 'Negative trend arrow icon'
                }
                width={20}
                height={20}
              />
            </div>
            <p className={styles.text}>{trend.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrendsCard
