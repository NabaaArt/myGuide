'use client';
import { useState, useEffect } from 'react';
import styles from './userCard.module.css'
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const UserCard = () => {

    const { data: usersData, error, isLoading } = useQuery({
        queryKey: ['usersData'],
        queryFn: async (e) => {
            try {
                const response = await axios.get('/api/user');
                return response.data;
            } catch (error) {
                console.error('Error fetching  Users Data data:', error); throw error;
            }
        },
    });

    const isError = !!error;




    return (
        <div>


            <Link href='profile' className={styles.link}>
                {isLoading ? (
                    <p>Loading...</p>
                ) : isError ? (
                    <h2>Error fetching data.</h2>
                ) : usersData && usersData.length > 0 ? (
                    usersData.map((userData) => (
                        <div className={styles.container}>

                            <img className={styles.userImg} src={userData.userImage} alt="companyImg" />
                            <div className={styles.userInfo}>
                                <h3 className={styles.userName}>{userData.userName}</h3>
                                <h4 className={styles.arrow}><IoIosArrowForward /></h4>
                            </div>

                            <h3 className={styles.userTitle}>{userData.userTitle}</h3>
                        </div>
                    ))
                ) : (
                    <h2>there are no users</h2>
                )}
            </Link>

        </div>
    )
}
export default UserCard