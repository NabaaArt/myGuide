"use client"
import styles from './page.module.css'
import Header from '../components/Header/header'
import AppContainer from '../components/AppContainer/appContainer'
import SearchBox from '../components/Search/SearchBox'
import Background from '../components/Background/background'
import Space from '../components/Space/space'
import React, { useState  } from 'react';
import TheFooter from '../components/Footer/footer'
import 'react-tabs/style/react-tabs.css';
import JobCard from '../components/JobCard/jobCard'
import { Tabs } from '../components/Tabs'
import CompanyCard from '../components/companyCard/companyCard'

export default function Home() {

  const [tab, setTab] = useState(0);

  return (
   <div>
      <Header/>
  
    <Background>
    <Space  height={16} />
      <SearchBox/>
      <Space  height={16} />

      <Tabs
      //  sticky={true}
        index={tab}
        
        onTab={val=>setTab(val)}
        // actions={[
        //    <Button onClick={()=> setIsModal(true)} type="primary">+ Create New</Button>
        // ]}
        tabs={[
          {
            label: "Jobs",
            content: <JobCard></JobCard>,
          },
          {
            label: "Companies",
            content: <CompanyCard></CompanyCard>,
          },
          {
            label: "Information",
            content: <CompanyCard></CompanyCard>,
          },
        ]}
      />
      <Space  height={26} />
    
    </Background>
 
    <TheFooter/>
   </div>
    
  )
}

