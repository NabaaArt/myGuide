'use client';
import styles from "./page.module.css"
import { useState } from "react"
import Header from "../../components/Header/header";
import Router from 'next/router';

const Login =()=>{
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        
        const userData = await response.json();
        console.log('Login successful:', userData);
        Router.push("/");
      } else {
        console.error('Login failed:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
    return(

 <div >
  <Header></Header>
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

        <label htmlFor="password"><b>Password</b></label>
        <input className ={styles.input}  type="password" placeholder="Enter Password" name="password" id="psw"
         value={formData.password}
         onChange={handleInputChange} required />

       <hr className={styles.hr}/>
        <p>By creating an account you agree to our <a href="#">Terms & Privacy</a></p>

        <button className={styles.logInBtn} type="submit">Log in</button>
      </div>

      <div className={styles.signin}>
        <p>Do not have an account?  <a href="/signin">Sign in</a>.</p>
      </div>
    </form>


 </div>


    )
}

export default Login