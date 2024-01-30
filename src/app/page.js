"use client";
import styles from "./page.module.css";
import Header from "../components/Header/header";
import AppContainer from "../components/AppContainer/appContainer";
import SearchBox from "../components/Search/SearchBox";
import Background from "../components/Background/background";
import Space from "../components/Space/space";
import React, { useState , useEffect} from "react";
import TheFooter from "../components/Footer/footer";
import "react-tabs/style/react-tabs.css";
import JobCard from "../components/JobCard/jobCard";
import { Tabs } from "../components/Tabs";
import CompanyCard from "../components/companyCard/companyCard";
import QuestionsCard from "../components/QuestionsCard/guestionsCard";
import InformationCard from "../components/informationCard/informationCard";
import UserCard from "../components/userCard/userCard";
import AppliedUserCard from "../components/appliedUsersCard/appliedUsersCard";

export default function Home() {
  const [tab, setTab] = useState(0);
 const [job , setJob]= useState([]);
 const [jobList, setJobList] = useState([]);

const getJobs = async () => {
    let url = "http://localhost:3000/api/job";

    try {
      let res = await fetch(url);
      let jsonData = await res.json();
      setJobList(jsonData);
    } catch (error) {
      console.error("Error fetching job data:", error);
    }
  };

  useEffect(() => {
  getJobs()
  }, []);
  
  return (
    <div>
      <Header />
      <Background>
        <Space height={16} />
        <SearchBox />
        <Space height={16} />
        <InformationCard />
        <Tabs
          //  sticky={true}
          index={tab}
          onTab={(val) => setTab(val)}
          // actions={[
          //    <Button onClick={()=> setIsModal(true)} type="primary">+ Create New</Button>
          // ]}
          tabs={[
            {
              label: "Jobs",
              content: <JobCard jobList={jobList} ></JobCard>
             
            },
            {
              label: "Companies",
              content: <CompanyCard   ></CompanyCard>,
            },
            {
              label: "Information",
              content: <QuestionsCard></QuestionsCard>,
            },
            {
              label: "users",
              content: <UserCard></UserCard>
             
            },
            {
              label: "applied users",
              content: <AppliedUserCard></AppliedUserCard>
             
            }
          ]}
        />
        <Space height={26} />
      </Background>

      <TheFooter />
    </div>
  );
}
