import InclusionScoreCard from '../InclusionScoreCard/InclusionScoreCard'
import RisksCard from '../RisksCard'
import OpptsCard from '../OpptsCard'
import NewHiresCard from '../NewHiresCard/NewHiresCard'
import WeeklyInclusionScoreCard from '../WeeklyScoreCard/WeeklyScoreCard'
import TrendsCard from '../TrendsCard'
import styles from './frame.module.css'
import DifferencesCard from '../DifferencesCard/DifferencesCard'

const GridItem = ({ className, children }) => (
  <div className={className}>{children}</div>
)

export default function Frame() {
  return (
    <div className={styles.gridFrame}>
      <div className={styles.gridContainer}>
        <div className={styles.heading}>
          <h1>Dashboard</h1>
        </div>
        <div className={styles.rowOne}>
          <GridItem className={styles.frame75}>
            <InclusionScoreCard />
          </GridItem>
          <GridItem className={styles.frame25}>
            <WeeklyInclusionScoreCard />
          </GridItem>
        </div>

        <div className={styles.rowTwo}>
          <div className={styles.leftColumnNewHires}>
            <GridItem className={styles.frame33}>
              <NewHiresCard />
            </GridItem>
          </div>
          <div className={styles.rightColumnNewHires}>
            <GridItem className={styles.frame33}>
              <DifferencesCard />
            </GridItem>
          </div>
        </div>

        <div className={styles.rowThree}>
          <div className={styles.leftColumnTrends}>
            <GridItem className={styles.title}>Trends</GridItem>
            <GridItem className={styles.leftBox}>
              <TrendsCard />
            </GridItem>
          </div>
          <div className={styles.rightColumn}>
            <GridItem className={styles.title}>Risks</GridItem>
            <div className={styles.frame50}>
              <RisksCard />
            </div>
            <GridItem className={styles.title}>Opportunities</GridItem>
            <div className={styles.frame50}>
              <OpptsCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
