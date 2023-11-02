'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './sidebar.module.css';
import styles2 from './hamburgerMenu.module.css';
import UserProfile from '../UserProfile/UserProfile';

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <Image
              src="/images/JOLINT-logo.svg"
              alt="Jolint logo"
              width={115}
              height={115}
            />
          </div>
          <div className={styles2.hamburgerButton} onClick={toggleMenu}>
            <div className={styles2.hamburgerLine} />
            <div className={styles2.hamburgerLine} />
            <div className={styles2.hamburgerLine} />
          </div>
        </div>
        
        {/* Menu items */}
        <div className={`${styles2.menuItems} ${menuOpen ? styles2.menuOpen : ''}`}>
          <div className={styles.listItems}>
            <div>
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
                <p>Sign out</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}