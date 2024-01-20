"use client";
import styles from "./page.module.css";


const Sidepanel = () => {
  const openNav = () => {
    document.getElementById("mySidepanel").style.width = "250px";
  }

  const closeNav = () => {
    document.getElementById("mySidepanel").style.width = "0";
  }
  return (
    <div>
      
 
    <div id={styles.mySidepanel} className={styles.sidepanel}>
        <a href="#" className={styles.closebtn} onClick={closeNav}>×</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>

      <button className={styles.openbtn} onClick={openNav}>☰ Toggle Sidepanel</button>
      <h2>Collapsed Sidepanel</h2>
      <p>Click on the hamburger menu/bar icon to open the sidepanel.</p>
      </div>
  );
}

export default Sidepanel;