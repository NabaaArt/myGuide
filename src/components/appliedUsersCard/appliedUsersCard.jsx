'use client';
import { useState, useEffect } from 'react';
import styles from './appliedUsersCard.module.css'
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';

const AppliedUserCard = () => {

    const [userData, setUserData] = useState({
        userName: 'user full name',
        userTitle: "user job title ",
        userImage: 'https://picsum.photos/90',
    });

    useEffect(() => {
        // Fetch company data from API
        fetchUserDataFromAPI()
            .then(data => setUserData(data))
            .catch(error => console.error('Error fetching company data:', error));
    }, []);

    const fetchUserDataFromAPI = async () => {
        // Replace with your actual API endpoint
        const response = await fetch('/api/companies/1'); // Assuming you want data for a specific company (e.g., with ID 1)
        const data = await response.json();
        return data;
    };
    const handleAccept = () => {
        // Send accept notification
        sendNotification('Accepted', 'Your job application has been accepted.');
      };
      const handleReject = () => {
        // Send reject notification
        sendNotification('Rejected', 'Your job application has been rejected.');
      };

      const sendNotification = async (type, message, recipientId) => {
        try {
          // Replace the following with your actual API endpoint to send a notification
          const response = await fetch('/api/sendNotification', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              type,
              message,
              recipientId,
            }),
          });
      
          if (response.ok) {
           
            console.log('Notification sent successfully');
            
            // For demonstration purposes, we'll simulate navigating to the notification page after a delay
            setTimeout(() => {
              // Navigate to the notification page with the appropriate message and type
              router.push(`/notifications?type=${type}&message=${encodeURIComponent(message)}`);
            }, 1000); // Simulating a delay of 1 second (adjust as needed)
          } else {
            // Handle the case where the notification failed to send
            console.error('Failed to send notification');
            // You might want to display an error message to the user or retry the notification
          }
        } catch (error) {
          console.error('Error sending notification:', error);
        }
      };
      
    return (
        <div className={styles.container}>
                <Link href='profile' className={styles.link}>
                    <img className={styles.userImg} src={userData.userImage} alt="companyImg" />
                    <div className={styles.userInfo}>
                        <h3 className={styles.userName}>{userData.userName}</h3>
                        <h4 className={styles.arrow}>  <IoIosArrowForward /></h4>
                    </div>
                    <h3 className={styles.userTitle}>{userData.userTitle}</h3>
                </Link>

            <div className={styles.buttons}>

                <button className={styles.acceptButton}  onClick={handleAccept}>accept</button>
                <button className={styles.rejectButton}  onClick={handleReject}>reject</button>
            </div>
        </div>

    )
}
export default AppliedUserCard