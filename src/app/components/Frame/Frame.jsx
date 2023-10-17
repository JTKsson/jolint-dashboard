import styles from './Frame.module.css';

export default function Frame() {
  return (
    <>
      <div className={styles.gridContainer}>
        <div className={styles.rowOne}>
          <div className={styles.frame75}>Inclusion score</div>
          <div className={styles.frame25}>Weekly inclusion score</div>
        </div>
        <div className={styles.rowTwo}>
          <div className={styles.leftColumn}>
            <div className={styles.frame50}>TBD</div>
            <div className={styles.frame50}>Inclusion of new-hires</div>
          </div>
          <div className={styles.frame33}>Differences</div>
        </div>
        <div className={styles.rowThree}>
          <div className={styles.oneBox}>Trends</div>
          <div className={styles.rightColumn}>
            <div className={styles.frame25}>Isolation</div>
            <div className={styles.frame25}>Segregation</div>
            <div className={styles.frame25}>Leadership access</div>
            <div className={styles.frame25}>Onboarding</div>
            <div className={styles.frame25}>Isolation</div>
            <div className={styles.frame25}>Segregation</div>
            <div className={styles.frame25}>Leadership access</div>
            <div className={styles.frame25}>Onboarding</div>
          </div>
        </div>
      </div>
    </>
  );
}
