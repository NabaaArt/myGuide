'use client';
import styles from "./page.module.css";
import Space from "../../components/Space/space";
import { useState} from 'react';
import AppContainer from "../../components/AppContainer/appContainer";
import Link from "next/link";
import Background from "../../components/Background/background";
import Header from "../../components/Header/header";

const postingJob=()=>{


const [formData, setFormData] = useState({
    title: '',
    descriptions: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the form data to the JobCard component or handle it as needed
    // For now, let's just log the data to the console
    console.log(formData);
  };

  return (
    <div className={styles.page}>
      <Header></Header>
         <Background> 
         <Space height={100}> </Space>
        <AppContainer> 
       
        <Space height={50}> </Space>
        <h1>Ready post jobs to your company</h1>
        <Space height={50}> </Space>
      <form onSubmit={handleSubmit}>
        <h3 className={styles.text}>
          Job Title:
          </h3>
          <input
            className={styles.myInput}
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
    
        <h3 className={styles.text}>
          Job Descriptions:
          </h3>
          <textarea
            className={styles.myInput}
            name="descriptions"
            value={formData.descriptions}
            onChange={handleChange}
          />
      

        <button className={styles.submtBtn} type="submit"><Link href='/companyProfile' className={styles.link}>submit</Link></button>
      </form>
  
     </AppContainer>
     </Background>
    </div>
  );
};


export default postingJob