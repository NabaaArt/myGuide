import styles from './companyJobCard.module.css';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const CompanyJobCard = () => {
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

const deleteJob = async (jobId) =>{
  try {
    const response = await fetch(`/api/job/${jobId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      const responseData = await response.json();
      console.log(responseData.message);
    } else {
      throw new Error('Failed to delete job');
    }
  } catch (error) {
    console.error('Error deleting job:', error.message);
  }
};
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
                  <button className={styles.deleteJobBtn} onClick={() => deleteJob(job.id)}>delete Job</button>
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

export default CompanyJobCard;


