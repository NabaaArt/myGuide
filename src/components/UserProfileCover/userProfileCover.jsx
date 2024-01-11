
import styles from './userProfileCover.module.css'

const UserProfileCover =()=>{

    return(
        <div className={styles.profileCover}>
        <div class={styles.heroImage}>
          <div class={styles.heroText}>
            <h1>I am John Doe</h1>
            <p>And I'm a Photographer</p>
            <button>Hire me</button>
          </div>
        </div>
      </div>
    )
}