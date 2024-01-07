import Link from "next/link";
import styles from "./header.module.css"
import AppContainer from "../AppContainer/appContainer";

const Header =()=>{
    return (
        <div className={styles.header}>
          <AppContainer width={1300}>
            <div className={styles.content}>
              <h2>LOGO</h2>
              <ul>
                <li><Link href='/'>Home</Link></li>
                <li> <Link href='/profile'>Profile</Link> </li>
              </ul>
            </div>
          </AppContainer>
        </div>
      );

 
}
export default Header ;