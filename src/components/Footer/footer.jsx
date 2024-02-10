import styles from "./footer.module.css"


const TheFooter = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.webInfo}>
                <p>created by Nabaa</p>
            </div>
            <p>  <a className={styles.contactLink} href="https://www.instagram.com/aon.iq?igsh=b3c5dnN0bDM2c2V3"> contact us </a> </p>
        </div>
    )
}

export default TheFooter