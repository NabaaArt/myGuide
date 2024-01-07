"use client"
import styles from './myTabs.module.css';
import { useState } from "react";

const Tabss = () => {
  const [activeTab, setActiveTab] = useState();

  const changeTab = (index) => {
    setActiveTab(index);
  };

  return (
    <div className= {styles.tabsContainer}>
    <div className={styles.tabs}>
      <div className={`${styles.tab} ${activeTab === 0 ? 'active' : ''}`} onClick={() => changeTab(0)}>Tab 1</div>
      <div className={`${styles.tab} ${activeTab === 1 ? 'active' : ''}`} onClick={() => changeTab(1)}>Tab 2</div>
      <div className={`${styles.tab} ${activeTab === 2 ? 'active' : ''}`} onClick={() => changeTab(2)}>Tab 3</div>

      <div id={styles.tabContent1}  className={`${styles.tabContent} ${activeTab === 0 ? 'active' : ''}`}>
        <p>This is the content for Tab 1.</p>
      </div>
      <div id="tabContent2" className={`${styles.tabContent} ${activeTab === 1 ? 'active' : ''}`}>
        <p>This is the content for Tab 2.</p>
      </div>
      <div id="tabContent3" className={`${styles.tabContent} ${activeTab === 2 ? 'active' : ''}`}>
        <p>This is the content for Tab 3.</p>
      </div>
    </div>
    </div>
  );
};

export default Tabss;
components/Tabs.js


// "use client"
// import React, { useState } from 'react';
// import styles from './myTabs.module.css';

// const tabsData = [
//   { label: 'Tab 1', content: 'This is the content for Tab 1.' },
//   { label: 'Tab 2', content: 'This is the content for Tab 2.' },
//   { label: 'Tab 3', content: 'This is the content for Tab 3.' },
// ];

// const Tabsss = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   return (
//     <div className={styles.tabsContainer}>
//       <div className={styles.tabs}>
//         {tabsData.map((tab, index) => (
//           <div
//             key={index}
//             className={`${styles.tab} ${activeTab === index ? 'active' : ''}`}
//             onClick={() => setActiveTab(index)}
//           >
//             {tab.label}
//           </div>
//         ))}
//       </div>

//       {tabsData.map((tab, index) => (
//         <div
//           key={index}
//           className={`${styles.tabContent} ${activeTab === index ? 'active' : ''}`}
//         >
//           <p>{tab.content}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Tabsss;