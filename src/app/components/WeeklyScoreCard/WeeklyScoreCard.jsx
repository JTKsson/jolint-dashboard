'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import inclusionData from '../../assets/inclusionData.json';
import styles from './weeklyScoreCard.module.css';
import ScoreChangeArrows from './ScoreChangeArrows';
import WeeklyInclusionScoreNav from './WeeklyScoreNav';
import ProgressBar from './ProgressBar';

export default function WeeklyInclusionScoreCard() {
  const [selectedData, setSelectedData] = useState(null);
  const [previousWeekData, setPreviousWeekData] = useState(null);
  const [uniqueWeeks, setUniqueWeeks] = useState([]);

  const getCurrentISOWeek = () => {
    const today = new Date();
    const year = today.getFullYear();
    const startOfYear = new Date(year, 0, 1);
    const days = Math.floor((today - startOfYear) / (24 * 60 * 60 * 1000));
    const isoWeek = Math.floor((days + startOfYear.getDay() + 6) / 7);
    return `${year}-W${String(isoWeek).padStart(2, '0')}`;
  };

  const getPreviousISOWeek = (currentISOWeek) => {
    const [year, week] = currentISOWeek.split('-W');
    const currentDate = new Date(year, 0, 1);
    const days = currentDate.getDay() - 1;
    const previousWeekStartDate = new Date(currentDate - days * 24 * 60 * 60 * 1000 - 7 * 24 * 60 * 60 * 1000);
    const previousWeek = Math.floor((previousWeekStartDate.getDate() - 1) / 7) + 1;
    return `${year}-W${String(previousWeek).padStart(2, '0')}`;
  };

  useEffect(() => {
    const currentWeek = getCurrentISOWeek();
    const currentData = inclusionData.find((dataItem) => dataItem['ISO_Week'] === currentWeek);

    const previousWeek = getPreviousISOWeek(currentWeek);
    const previousData = inclusionData.find((dataItem) => dataItem['ISO_Week'] === previousWeek);

    setSelectedData(currentData);
    setPreviousWeekData(previousData);
    setUniqueWeeks(Array.from(new Set(inclusionData.map((dataItem) => dataItem['ISO_Week']))));
  }, []);

  const handleWeekChange = (selectedWeek) => {
    const selectedDataItem = inclusionData.find((dataItem) => dataItem['ISO_Week'] === selectedWeek);

    const previousWeek = getPreviousISOWeek(selectedWeek);
    const previousData = inclusionData.find((dataItem) => dataItem['ISO_Week'] === previousWeek);

    setSelectedData(selectedDataItem);
    setPreviousWeekData(previousData);
  };

  const renderProgressBar = (label, dataKey, tooltip) => (
    <div className={styles.progressBarContent}>
      <ProgressBar
        percentage={Math.floor(selectedData && selectedData[dataKey])}
        lastMonth={selectedData && previousWeekData && Math.floor(selectedData[dataKey] - previousWeekData[dataKey])}
      />
      <div className={styles.result}>
        <p>{selectedData && Math.floor(selectedData[dataKey])}</p>
      </div>
      {tooltip && (
        <div className={styles.iconContainer}>
          <Image
            src="/images/info-icon.svg"
            alt="Info icon"
            width={15}
            height={15}
            className={styles.icon}
          />
          <div className={styles.tooltip}>
            <p>
              <b>{label}:</b> {tooltip}
            </p>
          </div>
        </div>
      )}
    </div>
  );

  const renderTopRowContainer = (label, infoKey, tooltip) => (
    <div className={styles.topRowContainer}>
      <div className={styles.infoLeftContainer}>
        <p>{label}</p>
        {tooltip && (
          <div className={styles.iconContainer}>
            <Image
              src="/images/info-icon.svg"
              alt="Info icon"
              width={15}
              height={15}
              className={styles.icon}
            />
            <div className={styles.tooltip}>
              <p>
                <b>{label}:</b> {tooltip}
              </p>
            </div>
          </div>
        )}
      </div>
      {selectedData && previousWeekData && (
        <ScoreChangeArrows lastMonth={Math.floor(selectedData[infoKey] - previousWeekData[infoKey])} />
      )}
    </div>
  );

  return (
    <div className={styles.main}>
      <WeeklyInclusionScoreNav uniqueWeeks={uniqueWeeks} onSelectWeek={handleWeekChange} />

      <div className={styles.rowOne}>
        {renderTopRowContainer('Team interactions', 'Team Inclusion', 'Evaluates the frequency and quality of communications between team members.')}
        {renderProgressBar('Team interactions', 'Team Inclusion')}
      </div>

      <div className={styles.rowTwo}>
        {renderTopRowContainer('Cross-functional interaction', 'Cross-Functional Inclusion', 'Measures the engagement between different departments or functions, showing how well teams are working cross-functionally.')}
        {renderProgressBar('Cross-functional interaction', 'Cross-Functional Inclusion')}
      </div>

      <div className={styles.rowThree}>
        {renderTopRowContainer('Informal influence', 'Informal Influence', 'Unofficial impact individuals have within the organisation.')}
        {renderProgressBar('Informal influence', 'Informal Influence')}
      </div>

      <div className={styles.rowFour}>
        {renderTopRowContainer('Work habits', 'Work Habits', 'Assesses the flexibility and inclusivity of work routines, such as meeting times, length of days, and work on weekends.')}
        {renderProgressBar('Work habits', 'Work Habits')}
      </div>
    </div>
  );
};

