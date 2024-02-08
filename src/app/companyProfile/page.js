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
import axios from "axios";
import { useQuery, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import companyJobCard from "../../components/companyJobCard/companyJobCard";

const CompanyProfile = () => {
  const {
    data: companyData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["companyData"],
    queryFn: async (e) => {
      try {
        const response = await axios.get("/api/company");
        return response.data;
      } catch (error) {
        console.error("Error fetching company data:", error);
        throw error;
      }
    },
  });

  const isError = !!error;

  return (
    <div>
      <Header />

      <Background>
        <Space height={50}></Space>
        <AppContainer>
          {isLoading ? (
            <p>Loading...</p>
          ) : isError ? (
            <h2>Error fetching data.</h2>
          ) : companyData && companyData.length > 0 ? (
            companyData.map((companyInfo) => (
              <div className={styles.companyInformation}>
                <div class={styles.textBlock}>
                  <h1 className={styles.companyName}>
                    {companyInfo.companyName}
                  </h1>
                  <h3 className={styles.companyTitle}>
                    {companyInfo.companyTitle}
                  </h3>

                  <div className={styles.alignRow}>
                    <div className={styles.companyIcons}>
                      <FaPhoneFlip />
                    </div>
                    <h3 className={styles.companyPhoneNumber}>
                      {companyInfo.companyNumber}
                    </h3>
                  </div>
                  <div className={styles.alignRow}>
                    <div className={styles.companyIcons}>
                      <IoMail />
                    </div>
                    <h3 className={styles.companyEmail}>
                      {companyInfo.companyEmail}
                    </h3>
                  </div>
                  <div className={styles.alignRow}>
                    <div className={styles.companyIcons}>
                      <FaLocationDot />
                    </div>
                    <h3 className={styles.companyAddress}>
                      {companyInfo.companyAddress}
                    </h3>
                  </div>
                </div>
                <img
                  className={styles.copmpanyImg}
                  src={companyInfo.copmpanyImage}
                  alt="companyImg"
                />
              </div>
            ))
          ) : (
            <h2>Sorry, no companies are available.</h2>
          )}
          <Space height={26}></Space>
          <companyJobCard></companyJobCard>
        </AppContainer>
      </Background>
      <TheFooter />
    </div>
  );
};
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CompanyProfile />
  </QueryClientProvider>
);

export default App;