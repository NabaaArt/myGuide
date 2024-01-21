'use client';
import styles from './userProfileCover.module.css'
import { useState ,useEffect } from 'react'

const UserProfileCover =()=>{
  const [profileCoverData, setProfileCoverData] = useState({
    name: 'John Doe',
    profession: 'Photographer',
    });

useEffect(() => {
    // Fetch user profile cover data from API
    fetchProfileCoverDataFromAPI()
        .then(data => setProfileCoverData(data))
        .catch(error => console.error('Error fetching profile cover data:', error));
}, []); // The empty dependency array ensures that this effect runs once on mount

const fetchProfileCoverDataFromAPI = async () => {
    // Replace with your actual API endpoint
    const response = await fetch('your-api-endpoint');
    const data = await response.json();
    return data;
};

    return(
        <div className={styles.profileCover}>
        <div class={styles.heroImage}>
          <div class={styles.heroText}>
            <h1>{profileCoverData.name}</h1>
            <p>{`And I'm a ${profileCoverData.profession}`}</p>
            <button>Hire me</button>
          </div>
        </div>
      </div>
    )
}

export default UserProfileCover