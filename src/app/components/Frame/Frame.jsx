import styles from './Frame.module.css'

const GridItem = ({ className, children }) => (
  <div className={className}>{children}</div>
)

export default function Frame() {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.rowOne}>
        <GridItem className={styles.frame75}>Inclusion score</GridItem>
        <GridItem className={styles.frame25}>Weekly inclusion score</GridItem>
      </div>

      <div className={styles.rowTwo}>
        <div className={styles.leftColumn}>
          <GridItem className={styles.frame50}>TBD</GridItem>
          <GridItem className={styles.frame50}>Inclusion of new-hires</GridItem>
        </div>
        <GridItem className={styles.frame33}>Differences</GridItem>
      </div>

      <div className={styles.rowThree}>
        <div className={styles.leftColumnTrends}>
          <GridItem className={styles.title}>Trends</GridItem>
          <GridItem className={styles.leftBox}>Trends</GridItem>
        </div>
        <div className={styles.rightColumn}>
          <GridItem className={styles.title}>Risks</GridItem>
          <div className={styles.rightColumnTop}>
            <GridItem className={styles.frame25}>Isolation</GridItem>
            <GridItem className={styles.frame25}>Segregation</GridItem>
            <GridItem className={styles.frame25}>Leadership access</GridItem>
            <GridItem className={styles.frame25}>Onboarding</GridItem>
          </div>
          <GridItem className={styles.title}>Opportunities</GridItem>
          <div className={styles.rightColumnBottom}>
            <GridItem className={styles.frame25}>Isolation</GridItem>
            <GridItem className={styles.frame25}>Segregation</GridItem>
            <GridItem className={styles.frame25}>Leadership access</GridItem>
            <GridItem className={styles.frame25}>Onboarding</GridItem>
          </div>
        </div>
      </div>
    </div>
  )
}
