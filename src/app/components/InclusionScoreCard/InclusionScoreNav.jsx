import { useState } from 'react'
import styles from './inclusionScoreCard.module.css'
import Image from 'next/image'

export default function InclusionScoreCard({ teamName }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className={styles.nav}>
      <div className={styles.title}>
        <h2>Timeline</h2>
      </div>
      <div className={styles.navItems}>
        <div className={styles.item}>
          <span>Company Average</span>
        </div>
        <div className={styles.item}>
          <span>Team {teamName}</span>
        </div>
        <div className={styles.dropdown}>
          <button onClick={toggleDropdown} className={styles.button}>
            <div>Team {teamName}</div>
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
            <div className={styles.dropdownContent}>
              {/* <p>Team {teamName}</p>
              <p>Team {teamName}</p>
              <p>Team {teamName}</p> */}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
