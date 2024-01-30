"use client";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import AppContainer from "../../components/AppContainer/appContainer";
import Space from "../../components/Space/space";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";

import Header from "../../components/Header/header";
import Background from "../../components/Background/background";

const MakingUserCV = () => {
  
  const saveDataToDatabase = async () => {
    try {
      // Construct the request body with the data you want to save
      const requestBody = {
        skills: selectedSkills,
        languages: selectedLanguages,
        workExperience: workExperience,
        education: education,
        certifications: certifications,
        photo: formData.photo,
        address: formData.address,
        phoneNumber: formData.phoneNumber,
      };
  
      // Make an HTTP POST request to your server endpoint to save data
      const response = await fetch("/api/save-cv-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
  
      // Check if the response status is in the range of 200-299 for success
      if (response.ok) {
        const responseData = await response.json();
        // Handle the response as needed (e.g., show a success message)
        console.log(responseData);
      } else {
        // Handle errors (e.g., show an error message)
        console.error("Error saving data:", response.statusText);
      }
    } catch (error) {
      // Handle other errors (e.g., network issues)
      console.error("Error saving data:", error);
    }
  };
  

  const [filterSkills, setFilterSkills] = useState("");
  const [skills, setSkills] = useState([
    "Communication",
    "Teamwork",
    "Problem Solving",
    "Adaptability",
    "Time Management",
    "Leadership",
    "Critical Thinking",
    "Creativity",
    "Emotional Intelligence",
    "Conflict Resolution",
    "Decision Making",
    "Active Listening",
    "Flexibility",
    "Stress Management",
    "Interpersonal Skills",
    "Negotiation",
    "Networking",
    "Patience",
    "Resilience",
    "Self-Motivation",
    "Attention to Detail",
    "Customer Service",
    "Empathy",
    "Innovation",
    "Persuasion",
    "Team Building",
    "Cultural Awareness",
    "Networking",
    "Open-Mindedness",
    "Positivity",
    "Time Management",
    "Work Ethic",
    "Adobe XD",
    "Sketch",
    "Figma",
    "InVision",
    "Illustrator",
    "Photoshop",
    "CorelDRAW",
    "Typography",
    "Color Theory",
    "User Interface (UI) Design",
    "User Experience (UX) Design",
    "Wireframing",
    "Prototyping",
    "Interaction Design",
    "Visual Design",
    "Web Design",
    "Mobile App Design",
    "Responsive Design",
    "Design Thinking",
    "Usability Testing",
    "Information Architecture",
    "Motion Design",
    "Graphic Design",
    "Brand Identity",
    "Icon Design",
    "Layout Design",
    "Print Design",
    "Design Systems",
    "User Research",
    "Problem Solving",
    "Collaboration",
    "Attention to Detail",
    "Programming",
    "Web Development",
    "Mobile App Development",
    "Database Management",
    "Data Analysis",
    "Machine Learning",
    "Artificial Intelligence",
    "Cybersecurity",
    "Cloud Computing",
    "Network Administration",
    "System Administration",
    "DevOps",
    "Software Development Life Cycle (SDLC)",
    "Version Control (Git)",
    "Agile Methodology",
    "Project Management",
    "UI/UX Design",
    "Graphic Design",
    "Video Editing",
    "3D Modeling",
    "Animation",
    "Game Development",
    "Hardware Troubleshooting",
    "Technical Writing",
    "Quality Assurance",
    "Automation Testing",
  ]);

  const [selectedSkills, setSelectedSkills] = useState([]);

  const [filterLanguages, setFilterLanguages] = useState("");
  const [languages, setLanguages] = useState([
    "English",
    "French",
    "Spanish",
    "German",
    "Mandarin",
    "Japanese",
    "Russian",
    "Arabic",
    "Kurdish",
    "Hindi",
    "Urdu",
  ]);

  const [selectedLanguages, setSelectedLanguages] = useState([]);

  useEffect(() => {
    const filteredSkills = skills.filter((skill) =>
      skill.toUpperCase().includes(filterSkills.toUpperCase())
    );
    setSkillsToShow(filteredSkills);
  }, [filterSkills, skills]);

  useEffect(() => {
    const filteredLanguages = languages.filter((language) =>
      language.toUpperCase().includes(filterLanguages.toUpperCase())
    );
    setLanguagesToShow(filteredLanguages);
  }, [filterLanguages, languages]);

  const [skillsToShow, setSkillsToShow] = useState([]);
  const [languagesToShow, setLanguagesToShow] = useState([]);

  const handleFilterSkillsChange = (event) => {
    const newFilter = event.target.value;
    setFilterSkills(newFilter);

    if (!newFilter) {
      setSkillsToShow(skills); // Show all skills when filter is empty
    }
  };

  const handleSkillSelect = (skill) => {
    setSelectedSkills((prevSelectedSkills) => [...prevSelectedSkills, skill]);
    setFilterSkills("");
  };

  const handleCancelSkillSelect = (index) => {
    setSelectedSkills((prevSelectedSkills) =>
      prevSelectedSkills.filter((_, i) => i !== index)
    );
  };

  const handleFilterLanguagesChange = (event) => {
    const newFilter = event.target.value;
    setFilterLanguages(newFilter);

    if (!newFilter) {
      setLanguagesToShow(languages); // Show all languages when filter is empty
    }
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguages((prevSelectedLanguages) => [
      ...prevSelectedLanguages,
      language,
    ]);
    setFilterLanguages("");
  };

  const handleCancelLanguageSelect = (index) => {
    setSelectedLanguages((prevSelectedLanguages) =>
      prevSelectedLanguages.filter((_, i) => i !== index)
    );
  };
  const [workExperience, setWorkExperience] = useState([
    {
      jobTitle: "",
      companyName: "",
      jobDescription: "",
    },
  ]);
  const handleRemoveWorkExperience = (index) => {
    setWorkExperience((prevWorkExperience) =>
      prevWorkExperience.filter((_, i) => i !== index)
    );
  };

  const handleAddWorkExperience = () => {
    // Check if the current job title is not empty before adding a new experience
    const currentJobTitle = workExperience[workExperience.length - 1].jobTitle;
    if (currentJobTitle.trim() !== "") {
      setWorkExperience((prevWorkExperience) => [
        ...prevWorkExperience,
        {
          jobTitle: "",
          companyName: "",
          jobDescription: "",
        },
      ]);
    } else {
      alert("Please enter a job title before adding a new work experience.");
    }
  };

  const handleWorkExperienceChange = (index, field, value) => {
    setWorkExperience((prevWorkExperience) => {
      const updatedWorkExperience = [...prevWorkExperience];
      updatedWorkExperience[index][field] = value;
      return updatedWorkExperience;
    });
  };
  const [education, setEducation] = useState([
    {
      degree: "",
      major: "",
      university: "",
    },
  ]);

  const [certifications, setCertifications] = useState([
    {
      name: "",
      issuingOrganization: "",
    },
  ]);
  const handleEducationChange = (index, field, value) => {
    setEducation((prevEducation) => {
      const updatedEducation = [...prevEducation];
      updatedEducation[index][field] = value;
      return updatedEducation;
    });
  };
  const handleCertificationChange = (index, field, value) => {
    setCertifications((prevCertifications) => {
      const updatedCertifications = [...prevCertifications];
      updatedCertifications[index][field] = value;
      return updatedCertifications;
    });
  };

  const handleAddEducation = () => {
    // Check if there's at least one education entry and it has a graduation date
    const hasGraduationDate = education.some(
      (edu) => edu.graduationDate !== null
    );

    if (!hasGraduationDate) {
      alert("Please enter a graduation date for education.");
      return;
    }

    setEducation((prevEducation) => [
      ...prevEducation,
      {
        degree: "",
        major: "",
        university: "",
      },
    ]);
  };

  const handleAddCertification = () => {
    // Check if there's at least one certification entry and it has an issue date
    const hasIssueDate = certifications.some((cert) => cert.issueDate !== null);

    if (!hasIssueDate) {
      alert("Please enter an issue date for certifications.");
      return;
    }

    setCertifications((prevCertifications) => [
      ...prevCertifications,
      {
        name: "",
        issuingOrganization: "",
      },
    ]);
  };
  const [formData, setFormData] = useState({
    // ... (previous state fields)
    userPhoto: null,
    userAddress: "",
    userPhoneNumber: "",
  });
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "photo") {
      setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };
  return (
    <div>
      
 
    <Header/>
    <Background> 
    <div className={styles.page}>
     
      <AppContainer>

        <Space height={40}> </Space>
        <h1>Ready to make your CV</h1>
        <Space height={30}> </Space>

        <h3 className={styles.title}>Enter your photo</h3>
        <input
          type="file"
          name="photo"
          id="photo"
          accept="image/*"
          value={formData.userPhoto}
          onChange={handleInputChange}
          className={styles.myInput}
        />

        <Space height={50}> </Space>
         
        <h3 className={styles.title}>Enter your address</h3>
        <input
          type="text"
          name="address"
          id="address"
          placeholder="Enter your address"
          value={formData.userAddress}
          onChange={handleInputChange}
          className={styles.myInput}
          required
        />

        <Space height={50}> </Space>

        <h3 className={styles.title}>Enter your phone number</h3>
        <input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="Enter your phone number"
          value={formData.userPhoneNumber}
          onChange={handleInputChange}
          className={styles.myInput}
          required
        />
        <Space  height={50}></Space>
        <h3 className={styles.title}>Enter your skills</h3>

        <input
          type="text"
          id="myInputSkills"
          onChange={handleFilterSkillsChange}
          value={filterSkills}
          placeholder="Search for skills.."
          title="Type in a skill"
          className={styles.myInput}
          required
        />

        {filterSkills && (
          <ul id="myULSkills" className={styles.nameList}>
            {skillsToShow.map((skill, index) => (
              <li
                key={index}
                className={styles.list}
                onClick={() => handleSkillSelect(skill)}
              >
                {skill}
              </li>
            ))}
          </ul>
        )}

        <div className={styles.selectedNames}>
          {selectedSkills.map((selectedSkill, index) => (
            <div key={index} className={styles.selectedName}>
              <span>{selectedSkill}</span>
              <div
                onClick={() => handleCancelSkillSelect(index)}
                className={styles.cancelButton}
              >
                x
              </div>
            </div>
          ))}
        </div>
        <Space height={50}> </Space>

        <h3 className={styles.title}>Enter your languages</h3>

        <input
          type="text"
          id="myInputLanguages"
          onChange={handleFilterLanguagesChange}
          value={filterLanguages}
          placeholder="Search for languages.."
          title="Type in a language"
          className={styles.myInput}
          required
        />

        {filterLanguages && (
          <ul id="myULLanguages" className={styles.nameList}>
            {languagesToShow.map((language, index) => (
              <li
                key={index}
                className={styles.list}
                onClick={() => handleLanguageSelect(language)}
              >
                {language}
              </li>
            ))}
          </ul>
        )}

        <div className={styles.selectedNames}>
          {selectedLanguages.map((selectedLanguage, index) => (
            <div key={index} className={styles.selectedName}>
              <span>{selectedLanguage}</span>
              <div
                onClick={() => handleCancelLanguageSelect(index)}
                className={styles.cancelButton}
              >
                x
              </div>
            </div>
          ))}
        </div>
        <Space height={50}> </Space>
        <h3 className={styles.title}>Enter your work experience</h3>

        <div className={styles.workInputStyle}>
          {workExperience.map((experience, index) => (
            <div key={index} className={styles.workExperience}>
              <input
                className={styles.myInput}
                type="text"
                placeholder="Job Title"
                value={experience.jobTitle}
                onChange={(e) =>
                  handleWorkExperienceChange(index, "jobTitle", e.target.value)
                }
              />
              <input
                className={styles.myInput}
                type="text"
                placeholder="Job Description"
                value={experience.jobDescription}
                onChange={(e) =>
                  handleWorkExperienceChange(
                    index,
                    "jobDescription",
                    e.target.value
                  )
                }
              />
              <input
                className={styles.myInput}
                type="text"
                placeholder="company Name"
                value={experience.companyName}
                onChange={(e) =>
                  handleWorkExperienceChange(
                    index,
                    "companyName",
                    e.target.value
                  )
                }
              />
              {/* {index > 0 && (
              // <button 
              //   onClick={() => handleRemoveWorkExperience(index)}
              //   className={styles.cancelButton}
              // >
              //   x
              // </button>
            )} */}
            </div>
          ))}
        </div>
        <button
          className={styles.addBtn}
          onClick={handleAddWorkExperience}
          disabled={!workExperience[workExperience.length - 1].jobTitle.trim()}
        >
          Add Work Experience
        </button>
        <Space height={50}></Space>
        <h3 className={styles.title}>Enter your education</h3>
        <div className={styles.educationInputStyle}>
          {education.map((edu, index) => (
            <div key={index} className={styles.education}>
              <input
                className={styles.myInput}
                type="text"
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) =>
                  handleEducationChange(index, "degree", e.target.value)
                }
              />
              <input
                className={styles.myInput}
                type="text"
                placeholder="Major"
                value={edu.major}
                onChange={(e) =>
                  handleEducationChange(index, "major", e.target.value)
                }
              />
              <input
                className={styles.myInput}
                type="text"
                placeholder="University"
                value={edu.university}
                onChange={(e) =>
                  handleEducationChange(index, "university", e.target.value)
                }
              />

              {/* {index > 0 && (
              <button
                onClick={() => handleRemoveEducation(index)}
                className={styles.cancelButton}
              >
                x
              </button>
            )} */}
            </div>
          ))}
          <button className={styles.addBtn} onClick={handleAddEducation}>
            Add Education
          </button>
        </div>
        <Space height={50}></Space>
        <h3 className={styles.title}>Enter your certifications</h3>
        <div className={styles.certificationsInputStyle}>
          {certifications.map((cert, index) => (
            <div key={index} className={styles.certification}>
              <input
                className={styles.myInput}
                type="text"
                placeholder="Certification Name"
                value={cert.name}
                onChange={(e) =>
                  handleCertificationChange(index, "name", e.target.value)
                }
              />
              <input
                className={styles.myInput}
                type="text"
                placeholder="Issuing Organization"
                value={cert.issuingOrganization}
                onChange={(e) =>
                  handleCertificationChange(
                    index,
                    "issuingOrganization",
                    e.target.value
                  )
                }
              />

              {/* {index > 0 && (
              <button
                onClick={() => handleRemoveCertification(index)}
                className={styles.cancelButton}
              >
                x
              </button>
            )} */}
            </div>
          ))}
          <button className={styles.addBtn} onClick={handleAddCertification}>
            Add Certification
          </button>
        </div>
        <button className={styles.done} onClick={saveDataToDatabase}>
          <Link className={styles.link} href="/">
            Done
          </Link>
        </button>
        
      </AppContainer>
 
    </div>
    </Background>
    </div>
  );
};
export default MakingUserCV;
