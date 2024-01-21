'use client';
import { useState ,useEffect} from 'react';
import styles from './companyCard.module.css'


const CompanyCard = () => {

    const [companyData, setCompanyData] = useState({
        name: 'company name',
        address: ' address',
        jobDescriptions: 'job Descriptions',
        imageUrl: 'https://picsum.photos/90',
      });
    
      useEffect(() => {
        // Fetch company data from API
        fetchCompanyDataFromAPI()
          .then(data => setCompanyData(data))
          .catch(error => console.error('Error fetching company data:', error));
      }, []);
    
      const fetchCompanyDataFromAPI = async () => {
        // Replace with your actual API endpoint
        const response = await fetch('/api/companies/1'); // Assuming you want data for a specific company (e.g., with ID 1)
        const data = await response.json();
        return data;
      };

      
    return (
        <div>
            <div className={styles.container}>
                <img className={styles.companyImg} src={companyData.imageUrl} alt="companyImg" />
               <div className={styles.companyInfo}>
               <h3 className={styles.companyName}>{companyData.name}</h3>
                <h4 className={styles.companyAddress}>{companyData.address}</h4>
                
               </div>
                <p className={styles.jobDescribtions}>{companyData.jobDescriptions}</p>
            </div>
        </div>
    )
}
export default CompanyCard