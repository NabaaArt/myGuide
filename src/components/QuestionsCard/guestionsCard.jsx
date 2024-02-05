
'use client';
import styles from "./guestionsCard.module.css"
import { useState, useEffect } from "react"
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const QuestionsCard = () => {

  const { data: questionsData, error, isLoading } = useQuery({
    queryKey: ['questionsData'],
    queryFn: async (e) => {
      try {
        const response = await axios.get('/api/questions');
        return response.data;
      } catch (error) {
        console.error('Error fetching informations Data data:', error); throw error;
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
      ) : questionsData && questionsData.length > 0 ? (
        questionsData.map((qa) => (
          <div key={qa.id} className={styles.container} isPressable onPress={() => fetcQuestionsDataFromAPI(el.id)}>
            <h3 className={styles.question}>{qa.question}</h3>
            <h3 className={styles.answer}>{qa.answer}</h3>
          </div>
        ))
      ) : (
        <h2>there are no applied Users</h2>
      )}

    </div>
  )
}

export default QuestionsCard