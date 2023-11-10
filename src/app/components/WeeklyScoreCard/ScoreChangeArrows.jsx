import Image from 'next/image'
import styles from './weeklyScoreCard.module.css'

export default function ScoreChangeArrows({ lastMonth }) {
  // Round down the values and convert them to strings
  const roundedLastMonth = Math.floor(lastMonth).toString()

  return (
    <>
      <div className={styles.mainArrowContainer}>
        <div className={styles.topArrowContainer}>
          <Image
            src={
              lastMonth > 0
                ? '/images/positive-arrow-green-icon.svg'
                : '/images/negative-arrow-red-icon.svg'
            }
            alt={lastMonth > 0 ? 'Green arrow up icon' : 'Red arrow down icon'}
            width={15}
            height={15}
            className={styles.icon}
          />
          <p>
            {lastMonth > 0
              ? `+${roundedLastMonth}`
              : `-${Math.abs(roundedLastMonth)} `}{' '}
          </p>
        </div>
      </div>
    </>
  )
}
