"use client";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import AppContainer from "../../components/AppContainer/appContainer";
import Space from "../../components/Space/space";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";
import Header from "../../components/Header/header";
import Background from "../../components/Background/background";

const MakingCompanyProfile = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        companyAddress: '',
        companyhoneNumber: '',
        companyEmail:'',
        companyPhoto: null,
      });
    
      const handleInputChange = (e) => {
        const { name, value, files } = e.target;
    
        if (name === 'photo') {
          setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
        } else {
          setFormData((prevData) => ({ ...prevData, [name]: value }));
        }
      };
    
      const saveDataToDatabase = async () => {
        try {
          const formDataToSend = new FormData();
          Object.entries(formData).forEach(([key, value]) => {
            formDataToSend.append(key, value);
          });
      
          // Make an HTTP POST request to your server endpoint to save company data
          const response = await fetch('/api/save-company', {
            method: 'POST',
            body: formDataToSend,
          });
      
          // Check if the response status is in the range of 200-299 for success
          if (response.ok) {
            const responseData = await response.json();
            // Handle the response as needed (e.g., show a success message)
            console.log(responseData);
          } else {
            // Handle errors (e.g., show an error message)
            console.error('Error saving company data:', response.statusText);
          }
        } catch (error) {
          // Handle other errors (e.g., network issues)
          console.error('Error saving company data:', error);
        }
      };
      
    return(
      <div>
        <Header/> 
        <Background>  
        <div className={styles.page}>
       
        <AppContainer>
          <Space height={50}> </Space>
          <h1>Ready to make your company's profile?</h1>
          <Space height={30}> </Space>
       
  
  <h3 className={styles.title}>Enter company name</h3>
  <input
    type="text"
    name="companyName"
    id="companyName"
    placeholder="Enter company name"
    value={formData.companyName}
    onChange={handleInputChange}
    className={styles.myInput}
    required
  />
      <Space height={50}> </Space>
          <h3 className={styles.title}>Enter company photo</h3>
          <input
            type="file"
            name="photo"
            id="photo"
            accept="image/*"
            value={formData.companyPhoto}
            onChange={handleInputChange}
            className={styles.myInput}
          />
 
          <Space height={50}> </Space>
  
          <h3 className={styles.title}>Enter company address</h3>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Enter your address"
            value={formData.companyAddress}
            onChange={handleInputChange}
            className={styles.myInput}
            required
          />
           <Space height={50}> </Space>
  
  <h3 className={styles.title}>Enter company email</h3>
  <input
    type="text"
    name="email"
    id="email"
    placeholder="Enter company email"
    value={formData.companyEmail}
    onChange={handleInputChange}
    className={styles.myInput}
    required
  />
  
          <Space height={50}> </Space>
  
          <h3 className={styles.title}>Enter company phone number</h3>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Enter compny phone number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className={styles.myInput}
            required
          />
         
         
          
          <button className={styles.done} onClick={saveDataToDatabase}>
            <Link className={styles.link} href="/">
              Done
            </Link>
          </button>
        </AppContainer>
      </div>
      </Background>
      </div>
    )

}

export default MakingCompanyProfile