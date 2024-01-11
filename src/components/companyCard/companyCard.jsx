import styles from './companyCard.module.css'


const CompanyCard = () => {
    return (
        <div>
            <div className={styles.container}>
                <img className={styles.companyImg} src="https://picsum.photos/90" alt="companyImg" />
               <div className={styles.companyInfo}>
               <h3 className={styles.companyName}>company name</h3>
                <h4 className={styles.companyAddress}>address</h4>
                
               </div>
                <p className={styles.jobDescribtions}>describtions.</p>
            </div>
        </div>
    )
}
export default CompanyCard