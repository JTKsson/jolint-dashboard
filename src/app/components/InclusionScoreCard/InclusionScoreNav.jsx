import React from 'react';
import styles from './inclusionScoreCard.module.css';

const InclusionScoreNav = ({ teamName }) => {
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
        <div className={styles.item}>
          <button>Team {teamName}</button>
        </div>
      </div>
    </div>
  );
};

export default InclusionScoreNav;
