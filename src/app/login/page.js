"use client";
import styles from "./page.module.css";
import { useState } from "react";
import Router from "next/router";
import axios from "axios";
import { signIn } from "next-auth/react";

const Login = () => {
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
      console.log(formData);
      // const { data: response } = await axios.post("/api/login", data);
      // Router.push("/");
      let result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: true,
        callbackUrl: "/",
      });
      console.log({ result });
      // return response.data;
    } catch (error) {
      console.error("Error logging in:", error);
      alert("faild logging in , please try again ");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={styles.container}>
          <h1>Log in</h1>
          <h2> welcome to the website </h2>
          <h4>Please fill in this form to create an account.</h4>
          <hr className={styles.hr} />

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

          <label htmlFor="password">
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

          <hr className={styles.hr} />
          <p>
            By creating an account you agree to our{" "}
            <a href="#">Terms & Privacy</a>
          </p>

          <button className={styles.logInBtn} type="submit">
            Log in
          </button>
        </div>

        <div className={styles.signin}>
          <p>
            Do not have an account? <a href="/signin">Sign in</a>.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
