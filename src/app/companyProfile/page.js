"use client";
import styles from "./page.module.css";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import AppContainer from "../../components/AppContainer/appContainer";
import Background from "../../components/Background/background";
import JobCard from "../../components/JobCard/jobCard";
import Header from "../../components/Header/header";
import TheFooter from "../../components/Footer/footer";
import Space from "../../components/Space/space";

const CompnyProfile = () => {
  return (
    <div>
      <Header />

      <Background>
        <Space height={50}></Space>
        <AppContainer>
        <div className={styles.companyInfo}>
          <div class={styles.textBlock}>
 
              <h1 className={styles.companyName}>company name</h1>
              <h3 className={styles.companyTitle}>company Title</h3>

              <div className={styles.alignRow}>
                <div className={styles.companyIcons}>
                  <FaPhoneFlip />
                </div>
                <h3 className={styles.companyPhoneNumber}>07784834832</h3>
              </div>
              <div className={styles.alignRow}>
                <div className={styles.companyIcons}>
                  <IoMail />
                </div>
                <h3 className={styles.companyEmail}>email</h3>
              </div>
              <div className={styles.alignRow}>
                <div className={styles.companyIcons}>
                  <FaLocationDot />
                </div>
                <h3 className={styles.companyAddress}>address</h3>
              </div>
               
            </div>
            <img className={styles.copmpanyImg} src="https://picsum.photos/100" alt="companyImg"/>
          
           </div>
          <JobCard></JobCard>
        </AppContainer>
      </Background>
      <TheFooter />
    </div>
  );
};
export default CompnyProfile;
