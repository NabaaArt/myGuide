
'use client';
import styles from './jobCard.module.css'
import { useState, useEffect } from 'react'


const JobCard = () => {
    const [jobList, setJobList] = useState([]);

    useEffect(() => {
        fetchJobDataFromAPI()
          .then((data) => setJobList(data))
          .catch((error) => console.error('Error fetching job data:', error));
      }, []);
    
      const fetchJobDataFromAPI = async () => {
        const response = await fetch('http://localhost:3000/api/job');
        const data = await response.json();
        return data;
      };
    return (
        <div className={styles.box}>

{jobList.length > 0 ? (
        jobList.map((jobInfo) => (
          <div class={styles.column} isPressable onPress={() => fetchJobDataFromAPI(el.id)}>
                <div class={styles.row}>
                    <div class={styles.card}>
                        <div className={styles.content}>
                            <div className={styles.companyInfo}>
                                <h3 className={styles.jobTitle}>{jobInfo.jobTitle}</h3>
                                <h4 className={styles.companyName}>{jobInfo.companyName}</h4>
                            </div>

                            <h4 className={styles.companyAddress}>{jobInfo.location}</h4>
                        </div>
                        <hr className={styles.lightLine} />


                        <p className={styles.jobDescribtions}>{jobInfo.jobDescription}</p>
                        <div className={styles.applyButtonContainer}>
                            <button className={styles.applyButton}> Apply now</button>

                        </div>
                    </div>
                </div>




            </div>
                ))
                ) : (
                  <p>Loading...</p>
                )}
        </div>
    )
}
export default JobCard