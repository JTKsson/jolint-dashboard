import Image from 'next/image'
import styles from './sidebar.module.css'

export default function Sidebar() {
  return (
    <div className={styles.main}>
      <div className={styles.userContainer}>
        User profile placeholder container
      </div>
      <div className={styles.textLabel}>
        <Image
          src="/images/dashboard-icon.svg"
          alt="Dashboard icon"
          width={20}
          height={20}
        />
        Dashboard
      </div>
      <div className={styles.textLabel}>
        <Image
          src="/images/settings-icon.svg"
          alt="Settings icon"
          width={20}
          height={20}
        />
        Settings
      </div>
    </div>
  )
}
