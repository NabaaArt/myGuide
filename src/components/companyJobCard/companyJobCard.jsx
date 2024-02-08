
import styles from './companyJobCard.module.css';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const companyJobCard = () => {
  const { data: companyJob, error, isLoading } = useQuery({
    queryKey: ['companyJob'],
    queryFn: async (e) => {
      try {
        const response = await axios.get('/api/company');
        return response.data;
      } catch (error) {
        console.error('Error fetching job data:', error); throw error;
      }
    },
  });

  const isError = !!error;

  return (
    <div className={styles.box}>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <h2>Error fetching data.</h2>
      ) : companyJob && companyJob.length > 0 ? (
        companyJob.map((job) => (
          <div className={styles.column} key={job?.id}>
            <div className={styles.row}>
              <div className={styles.card}>
                <div className={styles.content}>
                  <div className={styles.companyInfo}>
                    <h3 className={styles.jobTitle}>{job?.jobTitle}</h3>
                    <h4 className={styles.companyName}>- {job?.company?.companyName || 'company name'}</h4>
                  </div>
                  <h4 className={styles.companyAddress}>{job?.company?.companyAddress}</h4>
                </div>
                <hr className={styles.lightLine} />
                <p className={styles.jobDescribtions}>{job?.jobDescription}</p>
                <div className={styles.deleteJobBtnContainer}>
                  <button className={styles.deleteJobBtn}>delete Job</button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h2>Sorry, no jobs available.</h2>
      )}
    </div>
  );
};

export default companyJobCard;


