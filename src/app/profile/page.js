"use client";
 import Header from "../../components/Header/header";
import styles from "./page.module.css";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { useState,useEffect } from "react";

const ProfilePage = () => {

  const [userData, setUserData] = useState({
    userName: "my name",
    userJobTitle: "photograher",
    userPhoneNumber: "0323747274",
    userEmail: "jwhsuw@gmail",
    userAddress: "iraq",
    userProfileImg: "https://picsum.photos/200",
  });

  useEffect(() => {
    // Fetch user data from API
    fetchUserDataFromAPI()
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  const fetchUserDataFromAPI = async () => {
    // Replace with your actual API endpoint
    const response = await fetch("/api/user");
    const data = await response.json();
    return data;
  };

  return (
    <div>
      <Header />
      <div className={styles.userInfoProfile}>
        <div className={styles.userTextInfo}>
          <h1 className={styles.userName}> {userData.userName} </h1>
          <h3 className={styles.userJobTitle}>{userData.userJobTitle}</h3>
          <div className={styles.alignRow}>
            <div className={styles.userIcons}>
              <FaPhoneFlip />
            </div>
            <h3 className={styles.userPhoneNumber}>{userData.userPhoneNumber}</h3>
          </div>
          <div className={styles.alignRow}>
            <div className={styles.userIcons}>
              <IoMail />
            </div>
            <h3 className={styles.userEmail}>{userData.userEmail}</h3>
          </div>
          <div className={styles.alignRow}>
            <div className={styles.userIcons}>
              <FaLocationDot />
            </div>
            <h3 className={styles.userAddress}>{userData.userAddress}</h3>
          </div>
        </div>

        <img
          src={userData.userProfileImg} 
          className={styles.userProfileImg}
        ></img>
      </div>
      <div></div>

      <div className={styles.row}>
        <div className={styles.leftcolumn}>
          <div className={styles.card}>
            <h2 className={styles.headTitle}>WORK EXPERINCE :</h2>

            <hr />
            <div className={styles.experInfo}>
              <div className={styles.inlineRow}>
                <h3 className={styles.jobNameTitle}>Job Title</h3>
                <h4 className={styles.companyName}>company Name</h4>
              </div>
              <h5 className={styles.jobDescription}>Job Description</h5>
              <hr className={styles.lightLine} />
            </div>
          </div>
          <div className={styles.card}>
            <h2 className={styles.headTitle}>SKILLS :</h2>
            <hr />
            <h3 className={styles.skillName}>skill name</h3>
            <hr className={styles.lightLine} />
          </div>
          <div className={styles.card}>
            <h2 className={styles.headTitle}>CERTIFICATIONS :</h2>
            <hr />
            <h3 className={styles.certificationName}>Certification name</h3>
            <hr className={styles.lightLine} />
          </div>
        </div>
        <div className={styles.rightcolumn}>
          <div className={styles.card}>
            <h2 className={styles.headTitle}>EDUCATION :</h2>
            <hr />
            <p className={styles.education}>
              Some text about me in culpa qui officia deserunt mollit anim..
            </p>
          </div>
          <div className={styles.card}>
            <h2 className={styles.headTitle}>LANGUAGES :</h2>
            <hr />
            <h3 className={styles.langName}>English</h3>

            <hr className={styles.lightLine} />
          </div>
        </div>
      </div>

   
    </div>
  );
};

export default ProfilePage;
