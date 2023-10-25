import Image from 'next/image';
import styles from './inclusionScoreCard.module.css';

export default function ScoreChangeArrows({ lastMonth, benchmark }) {
  // Round up the values and convert them to strings
  const roundedLastMonth = Math.round(lastMonth).toString();
  const roundedBenchmark = Math.round(benchmark).toString();

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
            ? `+${roundedLastMonth}`
            : `-${Math.abs(roundedLastMonth)} `} since last month
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
            ? `+${roundedBenchmark} above`
            : `-${Math.abs(roundedBenchmark)} below`} benchmark
        </p>
      </div>
    </>
  );
}
