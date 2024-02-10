'use client';

import styles from './companyCard.module.css'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const CompanyCard = () => {

  // const [companyData, setCompanyData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetchCompanyDataFromAPI()
  //     .then((data) => {
  //       setCompanyData(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching job data:', error);
  //       setLoading(false);
  //     });
  // }, []);

  // const fetchCompanyDataFromAPI = async () => {
  //   try {
  //     const response = await fetch('/api/company');
  //     const data = await response.json();
  //     return data;
  //   } catch (error) {
  //     console.error('Error fetching company data:', error);
  //     throw error;
  //   }
  // };

  const { data: companyData, error, isLoading } = useQuery({
    queryKey: ['companyData'],
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
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <h2>Error fetching data.</h2>
      ) : companyData && companyData.length > 0 ? (
        companyData.map((company) => (
          <div className={styles.container} key={company?.id}>
            <img className={styles.companyImg} src={company?.companyImage} alt="companyImg" />
            <div className={styles.companyInfo}>
              <h3 className={styles.companyName}>{company?.companyName}</h3>
              <h4 className={styles.companyAddress}>{company?.companyAddress}</h4>
            </div>
            <p className={styles.jobDescribtions}>{company?.companyType}</p>
          </div>
        ))
      ) : (
        <h2>Sorry, no companies available.</h2>
      )}
    </div>
  )
}
export default CompanyCard