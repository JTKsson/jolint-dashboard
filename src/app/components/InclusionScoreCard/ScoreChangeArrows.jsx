import Image from 'next/image';
import styles from './inclusionScoreCard.module.css';

export default function ScoreChangeArrows({ lastMonth, benchmark }) {
  return (
    <>
      <div>
        <Image
          src={
            lastMonth > 0
              ? '/images/positive-arrow-green-icon.svg'
              : '/images/negative-arrow-red-icon.svg'
          }
          alt={lastMonth > 0 ? 'Green arrow icon' : 'Red arrow icon'}
          width={20}
          height={20}
          className={styles.arrow}
        />
        <p>
          {lastMonth > 0
            ? `+${lastMonth.toFixed(2)}`
            : `-${Math.abs(lastMonth).toFixed(2)}`}{' '}
          since last month
        </p>
      </div>

      <div>
      <Image
          src={
            benchmark > 0
              ? '/images/positive-arrow-green-icon.svg'
              : '/images/negative-arrow-red-icon.svg'
          }
          alt={benchmark > 0 ? 'Green arrow icon' : 'Red arrow icon'}
          width={20}
          height={20}
          className={styles.arrow}
        />
        <p>
          {benchmark > 0
            ? `+${benchmark.toFixed(2)} above`
            : `-${Math.abs(benchmark).toFixed(2)} below`}{' '}
          benchmark
        </p>
      </div>
    </>
  );
}
