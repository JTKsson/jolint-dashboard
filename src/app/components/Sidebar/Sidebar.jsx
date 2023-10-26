import Image from 'next/image'
import styles from './sidebar.module.css'
import UserProfile from '../UserProfile/UserProfile'

export default function Sidebar() {
  return (
    <div className={styles.main}>
      <div className={styles.userContainer}>
        <UserProfile />
      </div>
      <div className={styles.textLabel}>
        <Image
          src="/images/dashboard-icon.svg"
          alt="Dashboard icon"
          width={20}
          height={20}
        />
        <p>Dashboard</p>
      </div>
      <div className={styles.textLabel}>
        <Image
          src="/images/settings-icon.svg"
          alt="Settings icon"
          width={20}
          height={20}
        />
        <p>Settings</p>
      </div>
    </div>
  )
}
