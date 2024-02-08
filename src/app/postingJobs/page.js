"use client";
import styles from "./page.module.css";
import Space from "../../components/Space/space";
import { useState } from "react";
import AppContainer from "../../components/AppContainer/appContainer";
import Link from "next/link";
import Background from "../../components/Background/background";
import Header from "../../components/Header/header";

const postingJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    descriptions: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/posting-job", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();
      console.log("Job posted successfully:", responseData);
      alert("Job posted successfully");
      Router.push("/companyProfile");
    } catch (error) {
      console.error("Error posting job:", error);
    }
  };

  return (
    <div >
      <Header></Header> 
      <Background>
      <div className={styles.page}>
        <Space height={100}> </Space>
        <AppContainer>
          <Space height={50}> </Space>
          <h2>Ready post jobs to your company</h2>
          <Space height={50}> </Space>
          <form onSubmit={handleSubmit}>
            <h3 className={styles.text}>Job Title:</h3>
            <input
              className={styles.myInput}
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />

            <h3 className={styles.text}>Job Descriptions:</h3>
            <textarea
              className={styles.myInput}
              name="descriptions"
              value={formData.descriptions}
              onChange={handleChange}
            />
            <button className={styles.submtBtn} type="submit">
              <Link href="/companyProfile" className={styles.link}>
                submit
              </Link>
            </button>
          </form>
        </AppContainer>
        </div>
      </Background>
     
    </div>
  );
};

export default postingJob;
