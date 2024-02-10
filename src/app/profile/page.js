"use client";
import React from 'react';
import styles from "./page.module.css";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import {
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";



const ProfilePage = () => {
 
  const {
    data: userData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["userData"],
    queryFn: async (userId) => {
      try {
        const response = await axios.get(`/api/user/${userId}`);
        return response.data;
      } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
      }
    },
  });

  const isError = !!error;

  return (

        <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {isError ? (
              <h2>Error fetching data.</h2>
            ) : userData ? (
              <>
                <div className={styles.userInfoProfile}>
                  <div className={styles.userTextInfo}>
                    <h1 className={styles.userName}> {userData?.userName} </h1>
                    <p className={styles.userJobTitle}>{userData?.userTitle}</p>
                    <div className={styles.alignRow}>
                      <div className={styles.userIcons}>
                        <FaLocationDot />
                      </div>
                      <h3 className={styles.userAddress}>
                        {userData?.userAddress}
                      </h3>
                    </div>
                    <div className={styles.alignRow}>
                      <div className={styles.userIcons}>
                        <FaPhoneFlip />
                      </div>
                      <h3 className={styles.userPhoneNumber}>
                        {userData?.userNumber}
                      </h3>
                    </div>
                    <div className={styles.alignRow}>
                      <div className={styles.userIcons}>
                        <IoMail />
                      </div>
                      <h3 className={styles.userEmail}>
                        {userData?.userEmail}
                      </h3>
                    </div>
                  </div>
                  <img
                    src={userData?.userProfileImg}
                    className={styles.userImage}
                  ></img>
                </div>

                <div className={styles.page}>
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
                          <h5 className={styles.jobDescription}>
                            Job Description
                          </h5>
                          <hr className={styles.lightLine} />
                        </div>
                      </div>

                      <div className={styles.card}>
                        <h2 className={styles.headTitle}>SKILLS :</h2>
                        <hr />
                        <h3 className={styles.skillName}>
                          {userData?.userSkills}
                        </h3>
                        <hr className={styles.lightLine} />
                      </div>
                      <div className={styles.card}>
                        <h2 className={styles.headTitle}>CERTIFICATIONS :</h2>
                        <hr />
                        <h3 className={styles.certificationName}>
                          {userData?.userCertifications}
                        </h3>
                        <hr className={styles.lightLine} />
                      </div>
                    </div>
                    <div className={styles.rightcolumn}>
                      <div className={styles.card}>
                        <h2 className={styles.headTitle}>EDUCATION :</h2>
                        <hr />
                        <p className={styles.education}>
                          {userData?.userEducation}
                        </p>
                      </div>
                      <div className={styles.card}>
                        <h2 className={styles.headTitle}>LANGUAGES :</h2>
                        <hr />
                        <h3 className={styles.langName}>
                          {userData?.userLanguages}
                        </h3>

                        <hr className={styles.lightLine} />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <h2>No user data available. you have to make your CV</h2>
            )}
          </>
        )}
      </div>
 
  );
};

export default ProfilePage;
