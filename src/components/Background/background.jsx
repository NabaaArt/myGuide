import styles from './background.module.css'

const Background = ({ children, width = 10000 }) => {
    return (
      <div className={styles.background} style={{ maxWidth: width }}>
        {children}
      </div>
    );
}
export default Background;