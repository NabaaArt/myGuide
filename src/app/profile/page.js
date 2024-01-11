"use client";
 import Header from "../../components/Header/header";
import styles from "./page.module.css";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";


const ProfilePage = () => {
  return (
    <div>
      <Header />
      <div className={styles.userInfoProfile}>
        <div className={styles.userTextInfo}>
          <h1 className={styles.userName}>my name</h1>
          <h3 className={styles.userJobTitle}>Photograher</h3>
          <div className={styles.alignRow}>
            <div className={styles.userIcons}>
              <FaPhoneFlip />
            </div>
            <h3 className={styles.userPhoneNumber}>07784834832</h3>
          </div>
          <div className={styles.alignRow}>
            <div className={styles.userIcons}>
              <IoMail />
            </div>
            <h3 className={styles.userEmail}>email</h3>
          </div>
          <div className={styles.alignRow}>
            <div className={styles.userIcons}>
              <FaLocationDot />
            </div>
            <h3 className={styles.userAddress}>address</h3>
          </div>
        </div>

        <img
          src="https://picsum.photos/200"
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
                <h4 className={styles.date}>2016-2021</h4>
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
