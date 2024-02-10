"use client";
import styles from "./page.module.css";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import AppContainer from "../../components/AppContainer/appContainer";
import Background from "../../components/Background/background";
import TheFooter from "../../components/Footer/footer";
import Space from "../../components/Space/space";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import CompanyJobCard from "../../components/companyJobCard/companyJobCard";
import { useState } from "react";
import { useParams } from "react-router-dom";

const CompanyProfile = () => {
  const { companyId } = useParams();

  // const fetchCompanyData = (companyId) => {
  //   return axios.get(`/api/company/${companyId}`);
  // };
  // const useCompanyData = (companyId) => {
  //   return useQuery(["companyData", companyId], () =>
  //     fetchCompanyData(companyId)
  //   );
  // };
  // const { data, error, isLoading } = useQuery({
  //   queryKey: ["companyData", companyId],
  //   queryFn: () => fetchCompanyData(companyId),
  // });


  const {
    data: companyData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["companyData", companyId], // Pass companyId in queryKey
    queryFn: async () => {
      try {
        const response = await axios.get(`/api/company/${companyId}`);
        return response.data;
      } catch (error) {
        console.error("Error fetching company data:", error);
        throw error;
      }
    },
  });

  // const {
  //   data: companyData,
  //   error,
  //   isLoading,
  // } = useQuery({
  //   queryKey: ["companyData"],
  //   queryFn: async () => {
  //     try {
  //       const response = await axios.get("/api/company/");
  //       return response.data;
  //     } catch (error) {
  //       console.error("Error fetching company data:", error);
  //       throw error;
  //     }
  //   },
  // });

  const isError = !!error;

  return (
    <div>
      <Background>
        <Space height={50}></Space>
        <AppContainer>
          {isLoading ? (
            <p>Loading...</p>
          ) : isError ? (
            <h2>Error fetching data.</h2>
          ) : companyData && companyData.length > 0 ? (
            companyData.map((companyInfo) => (
              <div className={styles.companyInformation} key={companyInfo?.id}>
                <div className={styles.textBlock}>
                  <h1 className={styles.companyName}>
                    {companyInfo?.companyName}
                  </h1>
                  <h3 className={styles.companyTitle}>
                    {companyInfo?.companyTitle}
                  </h3>

                  <div className={styles.alignRow}>
                    <div className={styles.companyIcons}>
                      <FaPhoneFlip />
                    </div>
                    <h3 className={styles.companyPhoneNumber}>
                      {companyInfo?.companyNumber}
                    </h3>
                  </div>
                  <div className={styles.alignRow}>
                    <div className={styles.companyIcons}>
                      <IoMail />
                    </div>
                    <h3 className={styles.companyEmail}>
                      {companyInfo?.companyEmail}
                    </h3>
                  </div>
                  <div className={styles.alignRow}>
                    <div className={styles.companyIcons}>
                      <FaLocationDot />
                    </div>
                    <h3 className={styles.companyAddress}>
                      {companyInfo?.companyAddress}
                    </h3>
                  </div>
                </div>
                <img
                  className={styles.copmpanyImg}
                  src={companyInfo?.copmpanyImage}
                  alt="copmpanyImage"
                />
              </div>
            ))
          ) : (
            <h2>Sorry, no companies are available.</h2>
          )}
          <Space height={26}></Space>
          <CompanyJobCard></CompanyJobCard>
        </AppContainer>
      </Background>
      <TheFooter />
    </div>
  );
};

export default CompanyProfile;
