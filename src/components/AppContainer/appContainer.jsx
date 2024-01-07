
import styles from './appContainer.module.css'


const AppContainer = ({ children, width = 1000 }) => {
    return (
      <div className={styles.appContainer} style={{ maxWidth: width }}>
        {children}
      </div>
    );
  };
  
  export default AppContainer;
  