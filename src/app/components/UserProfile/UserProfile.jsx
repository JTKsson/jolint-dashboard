import Image from 'next/image'
import styles from './userProfile.module.css'

const mockData = [
  {
    name: 'Anna',
    role: 'HR',
  },
]

export default function UserProfile() {
  const user = mockData[0]

  return (
    <div className={styles.main}>
      <div className={styles.textLabel}>
        <Image
          src="/images/user-icon.svg"
          alt="User icon"
          width={74}
          height={74}
          className={styles.image}
        />
      </div>
      <div className={styles.textLabel}>
        <p>Welcome, {user.name}</p>
        <p>Team {user.role}</p>
      </div>
    </div>
  )
}
