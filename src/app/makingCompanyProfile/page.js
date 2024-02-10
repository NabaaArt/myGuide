"use client";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import AppContainer from "../../components/AppContainer/appContainer";
import Space from "../../components/Space/space";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";
import Background from "../../components/Background/background";
import axios from "axios";
import { useRouter } from "next/navigation";

const MakingCompanyProfile = () => {
  let router = useRouter();
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);

  const [formData, setFormData] = useState({
    companyName: "",
    companyAddress: "",
    companyTitle: "",
    companyNumber: "",
    companyEmail: "",
    companyImage: null,
    companyDescription: "",
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "companyImage") {
      setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      companyName &&
      companyAddress &&
      companyTitle &&
      companyNumber &&
      companyEmail &&
      companyDescription
    ) {
      try {
        const { data: response } = await axios.post(
          "/api/company/save-company",
          formData
        );
        router.push("/companyProfile"); 
        console.log("Company profile saved:", response.data);
      } catch (error) {
        console.error("Error logging in:", error);
      }
    } else {
      alert("Please fill in all required fields."); 
    }
  };

  return (
    <div>
      <Background>
        <div className={styles.page}>
          <AppContainer>
            <Space height={50}> </Space>
            <h1>Ready to make your company's profile?</h1>
            <Space height={30}> </Space>
            <form onSubmit={handleSubmit}>
              <h3 className={styles.title}>Enter company name</h3>
              <input
                type="text"
                name="companyName"
                id="companyName"
                placeholder="Enter company name"
                value={formData.companyName}
                onChange={(e) => {
                  handleInputChange(e);
                }}
                className={styles.myInput}
                required
              />
              <Space height={50}> </Space>
              <h3 className={styles.title}>Enter company name</h3>
              <input
                type="text"
                name="companyTitle"
                id="companyTitle"
                placeholder="Enter company's type"
                value={formData.companyTitle}
                onChange={(e) => {
                  handleInputChange(e);
                }}
                className={styles.myInput}
                required
              />
              <Space height={50}> </Space>
              <h3 className={styles.title}>Enter company photo</h3>
              <input
                type="file"
                name="companyImage"
                id="companyImage"
                accept="image/*"
                value={formData.companyImage}
                onChange={(e) => {
                  handleInputChange(e);
                }}
                className={styles.myInput}
              />

              <Space height={50}> </Space>

              <h3 className={styles.title}>Enter company address</h3>
              <input
                type="text"
                name="companyAddress"
                id="companyAddress"
                placeholder="Enter company's address"
                value={formData.companyAddress}
                onChange={(e) => {
                  handleInputChange(e);
                }}
                className={styles.myInput}
                required
              />
              <Space height={50}> </Space>

              <h3 className={styles.title}>Enter company email</h3>
              <input
                type="text"
                name="companyEmail"
                id="companyEmail"
                placeholder="Enter company's email"
                value={formData.companyEmail}
                onChange={(e) => {
                  handleInputChange(e);
                }}
                className={styles.myInput}
                required
              />

              <Space height={50}> </Space>

              <h3 className={styles.title}>Enter company phone number</h3>
              <input
                type="tel"
                name="companyNumber"
                id="companyNumber"
                placeholder="Enter compny's phone number"
                value={formData.companyNumber}
                onChange={(e) => {
                  handleInputChange(e);
                }}
                className={styles.myInput}
                required
              />

              <Space height={50}> </Space>

              <h3 className={styles.title}>Enter company description</h3>
              <input
                type="text"
                name="companyDescription"
                id="companyDescription"
                placeholder="Enter company's description"
                value={formData.companyDescription}
                onChange={(e) => {
                  handleInputChange(e);
                }}
                className={styles.myInput}
              />
              <button className={styles.done} type="submit">
                Done
              </button>
            </form>
            <Space height={70}> </Space>
          </AppContainer>
        </div>
      </Background>
    </div>
  );
};

export default MakingCompanyProfile;
