
'use client';
import styles from "./guestionsCard.module.css"
import { useState, useEffect } from "react"

const QuestionsCard = () => {
    const [qaData, setQAData] = useState({
        question: 'Loading Question...',
        answer: 'Loading answer...',
    });

    useEffect(() => {
        // Fetch question and answer from API
        fetchQADataFromAPI()
            .then(data => setQAData(data))
            .catch(error => console.error('Error fetching QA data:', error));
    }, []); // The empty dependency array ensures that this effect runs once on mount

    const fetchQADataFromAPI = async () => {
        // Replace with your actual API endpoint
        const response = await fetch('your-api-endpoint');
        const data = await response.json();
        return data;
    };

    return (
        <div>
            <div className={styles.container}>
                <h3 className={styles.question}>{qaData.question}</h3>
                <h3 className={styles.answer}>{qaData.answer}</h3>
            </div>
        </div>
    )
}

export default QuestionsCard