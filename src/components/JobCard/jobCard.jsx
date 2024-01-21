
'use client';
import styles from './jobCard.module.css'
import { useState, useEffect } from 'react'

const JobCard = () => {
    const [jobInfo, setJobInfo] = useState({
        title: 'Job Title',
        companyName: 'Company Name',
        companyLocation: 'Company Location',
        descriptions: 'Job descriptions: Lorem Ipsum...kawjdjdjdq JKBWDJKAD KAJNDJAND KJDWJSDJ menjnde jnefdjj',

      });
    
      useEffect(() => {
        // Fetch job data from an API
        fetchJobDataFromAPI()
          .then((data) => setJobInfo(data))
          .catch((error) => console.error('Error fetching job data:', error));
      }, []);
    
      const fetchJobDataFromAPI = async () => {
        // Replace with your actual API endpoint for job data
        const response = await fetch('/api/job');
        const data = await response.json();
        return data;
      };
    return (
        <div className={styles.box}>

            <div class={styles.column}>
                <div class={styles.row}>
                    <div class={styles.card}>
                        <div className={styles.content}>
                            <div className={styles.companyInfo}>
                                <h3 className={styles.jobTitle}>{jobInfo.title} - </h3>
                                <h4 className={styles.companyName}>{jobInfo.companyName}</h4>
                            </div>

                            <h4 className={styles.companyAddress}>{jobInfo.companyLocation}</h4>
                        </div>
                        <hr className={styles.lightLine} />


                        <p className={styles.jobDescribtions}>{jobInfo.descriptions}</p>
                        <div className={styles.applyButtonContainer}>
                            <button className={styles.applyButton}> Apply now</button>

                        </div>
                    </div>
                </div>




            </div>
        </div>
    )
}
export default JobCard