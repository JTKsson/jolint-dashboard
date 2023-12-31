import Image from 'next/image'
import styles from './inclusionScoreCard.module.css'

export default function ScoreChangeArrows({ lastMonth, benchmark }) {
  // Round down the values and convert them to strings
  const roundedLastMonth = Math.floor(lastMonth).toString()
  const roundedBenchmark = Math.floor(benchmark).toString()

  return (
    <>
      <div className={styles.mainArrowContainer}>
        <div className={styles.topArrowContainer}>
          <Image
            src={
              lastMonth > 0
                ? '/images/positive-arrow-green-icon-filled.svg'
                : '/images/negative-arrow-red-icon-filled.svg'
            }
            alt={lastMonth > 0 ? 'Green arrow icon' : 'Red arrow icon'}
            width={15}
            height={15}
            className={styles.arrow}
          />
          <p>
            {lastMonth > 0
              ? `+${roundedLastMonth}`
              : `-${Math.abs(roundedLastMonth)} `}{' '}
            since last month
          </p>
        </div>

        <div className={styles.bottomArrowContainer}>
          <Image
            src={
              benchmark > 0
                ? '/images/positive-arrow-green-icon-filled.svg'
                : '/images/negative-arrow-red-icon-filled.svg'
            }
            alt={benchmark > 0 ? 'Green arrow icon' : 'Red arrow icon'}
            width={15}
            height={15}
            className={styles.arrow}
          />
          <p>
            {benchmark > 0
              ? `+${roundedBenchmark} above`
              : `-${Math.abs(roundedBenchmark)} below`}{' '}
            benchmark
          </p>
        </div>
      </div>
    </>
  )
}
