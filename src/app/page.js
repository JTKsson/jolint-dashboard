import Frame from './components/Frame/Frame'
import Sidebar from './components/Sidebar/Sidebar'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.frame}>
          <Frame />
        </div>
      </div>
    </>
  )
}
