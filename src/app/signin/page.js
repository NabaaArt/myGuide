'use client';
import styles from "./page.module.css";
import Header from "../../components/Header/header";
import { useState } from "react";

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
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g., sending data to server or authentication
    console.log("Form submitted with data:", formData);
    // Add additional logic as needed, such as sending data to a server or performing authentication
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
            name="psw"
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
            name="psw-repeat"
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
            Sign in
          </button>
        </div>

        <div className={styles.signin}>
          <p>
            Already have an account? <a href="#">Sign in</a>.
          </p>
        </div>
      </form>
  
    </div>
  );
};
export default Singin;
