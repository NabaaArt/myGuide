

import styles from './jobCard.module.css'

const JobCard =( )=>{

    return (
   <div className={styles.box}> 

        <div class={styles.column}>
  <div class={styles.row}>
    <div class={styles.card}>
    <h3>Job Name</h3>
      <p>Company name</p>
      <p>Job discribtions </p>
    </div>
  </div>
  
  <div class={styles.row}>
    <div class={styles.card}>
    <h3>Job Name</h3>
      <p>Company name</p>
      <p>Job discribtions </p>
    </div>
  
 </div>
 </div>
 </div>
    )
} 
export default JobCard