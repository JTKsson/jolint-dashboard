import { useState } from 'react';
import styles from './inclusionScoreCard.module.css';

export default function InclusionScoreCard({ teamName }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.nav}>
      <div className={styles.title}>
        <h2>Timeline</h2>
      </div>
      <div className={styles.navItems}>
        <div className={styles.item}>
          <p>Company Average</p>
        </div>
        <div className={styles.item}>
          <p>Team {teamName}</p>
        </div>
        <div className={styles.dropdown}>
          <button onClick={toggleDropdown}>Team {teamName}</button>
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
  );
}
