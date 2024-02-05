'use client';
import styles from './appliedUsersCard.module.css'
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const AppliedUserCard = () => {
  const { data: appliedUsersData, error, isLoading } = useQuery({
    queryKey: ['appliedUsersData'],
    queryFn: async (e) => {
      try {
        const response = await axios.get('/api/user');
        return response.data;
      } catch (error) {
        console.error('Error fetching applied Users Data data:', error); throw error;
      }
    },
  });

  const isError = !!error;



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

  return (<div>

    {isLoading ? (
      <p>Loading...</p>
    ) : isError ? (
      <h2>Error fetching data.</h2>
    ) : appliedUsersData && appliedUsersData.length > 0 ? (
      appliedUsersData.map((userData) => (
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

            <button className={styles.acceptButton} onClick={handleAccept}>accept</button>
            <button className={styles.rejectButton} onClick={handleReject}>reject</button>
          </div>

        </div>
        ))
    ) : (
      <h2>there are no applied Users</h2>
    )}
  </div>
  )
}
export default AppliedUserCard