import Image from 'next/image'
import styles from './sidebar.module.css'
import UserProfile from '../UserProfile/UserProfile'

export default function Sidebar() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src="/images/JOLINT-logo.svg"
            alt="Jolint logo"
            width={100}
            height={100}
            />
        </div>
        <div className={styles.userContainer}>
          <UserProfile />
        </div>
        <div className={styles.buttonItem}>
          <Image
            src="/images/dashboard-icon.svg"
            alt="Dashboard icon"
            width={20}
            height={20}
            />
          <p>Dashboard</p>
        </div>
        <div className={styles.buttonItem}>
          <Image
            src="/images/settings-icon.svg"
            alt="Settings icon"
            width={20}
            height={20}
            />
          <p>Settings</p>
        </div>
      </div>
      <div>
        <div className={styles.buttonItem}>
          <Image
            src="/images/signout-icon.svg"
            alt="Signout icon"
            width={20}
            height={20}
            />
          <p className={styles.signOutText}>Sign out</p>
        </div>
      </div>
    </div>
  )
}
