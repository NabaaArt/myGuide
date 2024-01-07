
"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Header from '../components/Header/header'
import AppContainer from '../components/AppContainer/appContainer'
import SearchBox from '../components/Search/SearchBox'
import Background from '../components/Background/background'
import Space from '../components/Space/space'
import React, { useEffect,useState  } from 'react';
import MainTabs from '../components/MainTabs/mainTabs'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from '../components/JobCard/jobCard'

export default function Home() {




  return (
   <div>
      <Header/>
  
    <Background>
    <Space  height={16} />
      <SearchBox/>
      <Space  height={16} />
      <MainTabs/>
      <Space  height={26} />
      <JobCard/>
    </Background>
 
    
   </div>
    
  )
}

