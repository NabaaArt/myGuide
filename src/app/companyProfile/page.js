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
import { useState,useEffect } from "react";

const CompnyProfile = () => {
  const [companyInfo, setCompanyInfo] = useState({
    name: "Company Name",
    title: "Company Title",
    phoneNumber: "07784834832",
    email: "example@example.com",
    address: "Company Address",
    imageUrl: "https://picsum.photos/100",
  });
  useEffect(() => {
   // Example: Fetch additional data from an API
    const fetchData = async () => {
      const result = await fetch("your-api-endpoint");
      const data = await result.json();
      setCompanyInfo((prevInfo) => ({ ...prevInfo, additionalData: data }));
    };
   fetchData();
  }, []); // Dependencies array is empty to run the effect only once on mount


  return (
    <div>
      <Header />

      <Background>
        <Space height={50}></Space>
        <AppContainer>
        <div className={styles.companyInfo}>
          <div class={styles.textBlock}>
 
              <h1 className={styles.companyName}>{companyInfo.name}</h1>
              <h3 className={styles.companyTitle}>{companyInfo.title}</h3>

              <div className={styles.alignRow}>
                <div className={styles.companyIcons}>
                  <FaPhoneFlip />
                </div>
                <h3 className={styles.companyPhoneNumber}>{companyInfo.phoneNumber}</h3>
              </div>
              <div className={styles.alignRow}>
                <div className={styles.companyIcons}>
                  <IoMail />
                </div>
                <h3 className={styles.companyEmail}>{companyInfo.email}</h3>
              </div>
              <div className={styles.alignRow}>
                <div className={styles.companyIcons}>
                  <FaLocationDot />
                </div>
                <h3 className={styles.companyAddress}>{companyInfo.address}</h3>
              </div>
               
            </div>
            <img className={styles.copmpanyImg} src={companyInfo.imageUrl} alt="companyImg"/>
          
           </div>
          <JobCard></JobCard>
        </AppContainer>
      </Background>
      <TheFooter />
    </div>
  );
};
export default CompnyProfile;
