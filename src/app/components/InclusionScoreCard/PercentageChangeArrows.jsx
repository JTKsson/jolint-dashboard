import Image from 'next/image';
import styles from './inclusionScoreCard.module.css';

export default function PercentageChangeArrows({ percentageChange }) {
  return (
    <div>
      <Image
        src={
          percentageChange > 0
            ? '/images/positive-arrow-green-icon.svg'
            : '/images/negative-arrow-red-icon.svg'
        }
        alt={percentageChange > 0 ? 'Green arrow icon' : 'Red arrow icon'}
        width={20}
        height={20}
        className={styles.arrow}
      />
      <p>
        {percentageChange > 0
          ? `+${percentageChange.toFixed(2)}%`
          : `-${Math.abs(percentageChange).toFixed(2)}%`}{' '}
        since last month
      </p>
      <div>
        <Image
          src="/images/positive-arrow-green-icon.svg"
          alt="Green arrow icon"
          width={20}
          height={20}
          className={styles.arrow}
        />
        <p>above benchmark</p>
      </div>
    </div>
  );
}
