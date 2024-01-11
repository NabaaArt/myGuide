

import styles from './jobCard.module.css'

const JobCard = () => {

    return (
        <div className={styles.box}>

            <div class={styles.column}>
                <div class={styles.row}>
                    <div class={styles.card}>
                        <div className={styles.content}>
                            <div className={styles.companyInfo}>
                                <h3 className={styles.jobTitle}>Job Title - </h3>
                                <h4 className={styles.companyName}>Company name</h4>
                            </div>

                            <h4 className={styles.companyAddress}>Company location </h4>
                        </div>
                        <hr className={styles.lightLine} />


                        <p className={styles.jobDescribtions}>Job discribtions : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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