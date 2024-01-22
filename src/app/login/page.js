'use client';
import styles from "./page.module.css"
import { useState } from "react"

const Login =()=>{
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
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

    return(

 <div >
    {/* inside form shoud be "action" to get data from user */}
    <form onSubmit={handleSubmit}>   
      <div className={styles.container}>
        <h1>Log in</h1>
        <h2> welcome to the website </h2>
        <h4>Please fill in this form to create an account.</h4>
        <hr className={styles.hr}/>

        <label htmlFor="email"><b>Email</b></label>
        <input className ={styles.input}  type="text" placeholder="Enter Email" name="email" id="email" 
        value={formData.email}
        onChange={handleInputChange}
        required />

        <label htmlFor="psw"><b>Password</b></label>
        <input className ={styles.input}  type="password" placeholder="Enter Password" name="psw" id="psw"
         value={formData.password}
         onChange={handleInputChange} required />

       <hr className={styles.hr}/>
        <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

        <button className={styles.logInBtn} type="submit"  >Log in</button>
      </div>

      <div className={styles.signin}>
        <p>Do not have an account?  <a href="/signin">Sign in</a>.</p>
      </div>
    </form>


 </div>


    )
}

export default Login