'use client';
import { useState, useEffect } from 'react';
import styles from './userCard.module.css'
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';

const UserCard = () => {

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


    return (
        <Link href='profile' className={styles.link}>
            <div className={styles.container}>

                <img className={styles.userImg} src={userData.userImage} alt="companyImg" />
                <div className={styles.userInfo}>
                    <h3 className={styles.userName}>{userData.userName}</h3>
                    <h4 className={styles.arrow}><IoIosArrowForward /></h4>
                </div>

                <h3 className={styles.userTitle}>{userData.userTitle}</h3>
            </div>

        </Link>
    )
}
export default UserCard