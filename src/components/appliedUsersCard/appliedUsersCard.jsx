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

    sendNotification('Accepted', 'Your job application has been accepted.');
  };
  const handleReject = () => {

    sendNotification('Rejected', 'Your job application has been rejected.');
  };

  const sendNotification = async (type, message, recipientId) => {
    try {
      const response = await fetch('/api/notification', {
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

        setTimeout(() => {
          router.push(`/notifications?type=${type}&message=${encodeURIComponent(message)}`);
        }, 1000); // Simulating a delay of 1 second (adjust as needed)
      } else {

        console.error('Failed to send notification');
        alert("faild to send notification,please send it again")
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