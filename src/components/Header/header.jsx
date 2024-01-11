import Link from "next/link";
import styles from "./header.module.css"
import AppContainer from "../AppContainer/appContainer";
import { IoPerson } from "react-icons/io5";

const Header = () => {
  return (
    <div className={styles.header}>
      <AppContainer width={1300}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <h2>LOGO</h2>
            <h2>MY GUIDE</h2>
          </div>

          <ul>
            <li><Link className={styles.link} href='/'>Home</Link></li>
            <li><Link className={styles.link} href='/signin'>Sign in </Link></li>
            <li><Link className={styles.link} href='/companyProfile'>company </Link></li>
            <li  > <Link className={styles.link} href='/profile'><IoPerson /></Link> </li>
          </ul>
        </div>
      </AppContainer>
    </div>
  );


}
export default Header;