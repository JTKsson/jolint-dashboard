import { useState } from 'react'
import styles from './weeklyScoreCard.module.css'
import Image from 'next/image'

export default function InclusionScoreCard({ thisWeek }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className={styles.nav}>
      <div className={styles.title}>
        <h2>Weekly inclusion score</h2>
      </div>
      <div className={styles.dropdown}>
        <button onClick={toggleDropdown} className={styles.button}>
          <div>This week</div>
          <div>
            <Image
              src="/images/arrow-down-s-line.svg"
              alt="Arrow down icon"
              width={8}
              height={8}
            />
          </div>
        </button>
        {isDropdownOpen && (
          <div className={styles.dropdownContent}>{/* Add content here */}</div>
        )}
      </div>
    </div>
  )
}
