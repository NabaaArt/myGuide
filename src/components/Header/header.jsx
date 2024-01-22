'use client';
import Link from "next/link";
import styles from "./header.module.css"
import AppContainer from "../AppContainer/appContainer";
import { IoPersonSharp } from "react-icons/io5"; import { HiViewList } from "react-icons/hi";
import { useState, useEffect, useRef } from 'react';
import { IoNotifications } from "react-icons/io5";

const Header = () => {
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);

  const notificationDropdownRef = useRef(null);
  const settingsDropdownRef = useRef(null);

  const toggleNotificationDropdown = () => {
    setShowNotificationDropdown(!showNotificationDropdown);
    setShowSettingsDropdown(false); // Close the settings dropdown when opening the notification dropdown
  };

  const toggleSettingsDropdown = () => {
    setShowSettingsDropdown(!showSettingsDropdown);
    setShowNotificationDropdown(false); // Close the notification dropdown when opening the settings dropdown
  };

  const closeDropdowns = (event) => {
    if (
      notificationDropdownRef.current &&
      !notificationDropdownRef.current.contains(event.target) &&
      settingsDropdownRef.current &&
      !settingsDropdownRef.current.contains(event.target)
    ) {
      setShowNotificationDropdown(false);
      setShowSettingsDropdown(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', closeDropdowns);

    return () => {
      window.removeEventListener('click', closeDropdowns);
    };
  }, []);
  return (
    <div className={styles.header}>
      <AppContainer width={1300}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <h2>LOGO</h2>
            <h2>MY GUIDE</h2>
          </div>

          <ul className={styles.navBarIcons}>
            <li><Link className={styles.link} href='/'>Home</Link></li>
            <li><Link className={styles.link} href='/companyProfile'>company </Link></li>
            <li><Link className={styles.link} href='/profile'>< IoPersonSharp /></Link> </li>

            <li>
              <div ref={notificationDropdownRef} className={styles.dropdown}>
                <div onClick={toggleNotificationDropdown} className={styles.notiDropbtn}> <IoNotifications /></div>
                <div id="notificationDropdown" className={`${styles.dropdownNotificationContent} ${showNotificationDropdown ? styles.show : ''}`}>
                  <h4 className={styles.notificationInfo}>you got an offer from company ...</h4>
                  <h5>see details</h5>
                  <hr className={styles.lightLine} />
                </div>
              </div>
            </li>
            <li>
              <div ref={settingsDropdownRef} className={styles.dropdown}>
                <button onClick={toggleSettingsDropdown} className={styles.dropbtn}>Settings <HiViewList /></button>
                <div id="settingsDropdown" className={`${styles.dropdownSettingsContent} ${showSettingsDropdown ? styles.show : ''}`}>
                  <Link className={styles.dropdownContentText} href="/">Home</Link>
                  <Link className={styles.dropdownContentText} href="#about">Languages</Link>
                  <Link className={styles.dropdownContentText} href="#contact">Notification</Link>
                  <Link className={styles.dropdownContentText} href='/signin'>Sign in </Link>
                  <Link className={styles.dropdownContentText} href='/login'>login </Link>
                  <Link className={styles.dropdownContentText} href='/makingUserCV'>Make or Edit CV </Link>
                  <Link className={styles.dropdownContentText} href='/makingCompanyProfile'>Make company profile</Link>
                  <Link className={styles.dropdownContentText} href='/postingJobs'>posting jobs</Link>
                
                </div>
              </div>
            </li>

          </ul>
        </div>
      </AppContainer>
    </div>
  );


}
export default Header;
