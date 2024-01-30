'use client';
import styles from "./page.module.css";
import Header from "../../components/Header/header";
import { useState } from "react";
import Space from "../../components/Space/space";
import Link from "next/link";


const Singin = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
    userType: "person", // Default to "person"
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Make an HTTP POST request to your server endpoint to save user data
      const response = await fetch('/api/save-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      // Check if the response status is in the range of 200-299 for success
      if (response.ok) {
        const responseData = await response.json();
        // Handle the response as needed (e.g., show a success message)
        console.log(responseData);
      } else {
        // Handle errors (e.g., show an error message)
        console.error('Error saving user data:', response.statusText);
      }
    } catch (error) {
      // Handle other errors (e.g., network issues)
      console.error('Error saving user data:', error);
    }
  };
  

  return (
    <div>
<Header></Header>
      <form  onSubmit={handleSubmit}>
        <div className={styles.container}>
          <h1>SIGN IN</h1>
          <h2> welcome to the website </h2>
          <h4>Please fill in this form to create an account.</h4>
          <hr className={styles.hr} />

          <label htmlFor="firstName">
            <b>First Name</b>
          </label>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter your first name"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="lastName">
            <b>Last Name</b>
          </label>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter your last name"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            className={styles.input}
            type="password"
            placeholder="Enter Password"
            name="password"
            id="psw"
            value={formData.password}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <input
            className={styles.input}
            type="password"
            placeholder="Repeat Password"
            name="repeatPassword"
            id="psw-repeat"
            value={formData.repeatPassword}
  onChange={handleInputChange}
            required
          />
  <label htmlFor="options">
            <b>Select if you are an person who are searching for jobs or a company that has jobs to offer</b>
          </label>
          <div className={styles.dropdownContainer}>
        
            <select id="dropdown" className={styles.dropdownInput}
             value={formData.userType}
             onChange={handleInputChange}>
              <option value="person">{"Person (employee)"}</option>
              <option value="company">Company</option>
       
            </select>
        
          </div>
          <hr className={styles.hr} />
          <p>
            By creating an account you agree to our{" "}
            <a href="#">Terms & Privacy</a>.
          </p>

          <button className={styles.signInBtn} type="submit">
            <Link className={styles.link} href="/makingUserCV" > Sign in</Link> 
          </button>
        </div>

        <div className={styles.signin}>
          <p>
            Already have an account? <a href="/login">Log in</a>.
          </p>
        </div>
      </form>
     <Space height={50}></Space>
  
    </div>
  );
};
export default Singin;
