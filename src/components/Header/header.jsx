'use client';
import Link from "next/link";
import styles from "./header.module.css"
import AppContainer from "../AppContainer/appContainer";
import { IoPersonSharp } from "react-icons/io5"; import { HiViewList } from "react-icons/hi";
import { useState, useEffect, useRef, use } from 'react';
import { IoNotifications } from "react-icons/io5";
import { signOut, getProviders, useSession } from 'next-auth/react'

const Header = () => {
  //const isUserLoggedIn = true; 
  const { data: session } = useSession();
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (session) setUser(JSON.parse(session.user.email))
  }, [session])

  console.log(user)

  const [providers, setProviders] = useState(null);

  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
  const [userType, setUserType] = useState(null);

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
    const fetchUserType = async () => {
      try {
        const response = await fetch('/api/getUserType');
        const data = await response.json();
        setUserType(data.userType);
      } catch (error) {
        console.error('Error fetching user type:', error);
      }
    };

    fetchUserType();
  }, []);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response)
    }
    window.addEventListener('click', closeDropdowns);

    return () => {
      window.removeEventListener('click', closeDropdowns);
    };
    setUpProviders();
  }, []);

  return (
    <div className={styles.header}>
      <AppContainer width={1300}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img src="public/logo.svg" alt="" />
            <h3>MY GUIDE</h3>
          </div>

          <ul className={styles.navBarIcons}>
            <li><Link className={styles.link} href='/'>Home</Link></li>

            {user ? (
              <>
                {user.userType === 'Recruiter' ? (
                  <li><Link className={styles.link} href='/profile'><IoPersonSharp /></Link></li>
                ) : (
                  <li><Link className={styles.link} href='/companyProfile'><IoPersonSharp /></Link></li>
                )}
              </>
            ) : (
              //  <Link className={styles.link} href='/signin'>login </Link>
              <>  {
                providers && Object.values(providers).map((provider) => (
                  <button type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                  ></button>
                ))}

              </>)}
            <li>
              <div ref={notificationDropdownRef} className={styles.dropdown}>
                <div onClick={toggleNotificationDropdown} className={styles.notiDropbtn}> <IoNotifications /></div>
                <div id="notificationDropdown" className={`${styles.dropdownNotificationContent} ${showNotificationDropdown ? styles.show : ''}`}>
                  <h4 className={styles.notificationInfo}>you got an offer from company ...</h4>
                  <h5>please visit our company</h5>
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
                  <Link className={styles.dropdownContentText} href='/signin'>Sign in </Link>
                  <Link className={styles.dropdownContentText} href='/login'>login </Link>

                  <Link className={styles.dropdownContentText} href='/makingUserCV'>Make or Edit CV </Link>
                  {/* {userType === 'Recruiter' && ( */}

                  <Link className={styles.dropdownContentText} href='/makingCompanyProfile'>Make company profile</Link>

                  {/* )} */}

                  <Link className={styles.dropdownContentText} href='/postingJobs'>posting jobs</Link>
                  {session !== null && <button type="button" onClick={signOut}>Sign out</button>}

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
