import styles from "./guestionsCard.module.css"

const QuestionsCard = () => {

    return (
        <div>
            <div className={styles.container}>
                <h3 className={styles.question}>Question ...?</h3>
                <h3 className={styles.answer}>answer</h3>
            </div>
        </div>
    )
}

export default QuestionsCard