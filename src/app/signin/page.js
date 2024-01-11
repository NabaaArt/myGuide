import styles from "./page.module.css";
import Background from "../../components/Background/background";
const Singin = () => {
  return (
    <div>

      <form>
        <div className={styles.container}>
          <h1>SIGN IN</h1>
          <h2> welcome to the website </h2>
          <h4>Please fill in this form to create an account.</h4>
          <hr className={styles.hr} />

          <label htmlFor="firstName">
            <b>First Name</b>
          </label>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter your first name"
            name="firstName"
            id="firstName"
            required
          />

          <label htmlFor="lastName">
            <b>Last Name</b>
          </label>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter your last name"
            name="lastName"
            id="lastName"
            required
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            required
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            className={styles.input}
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            required
          />

          <label htmlFor="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <input
            className={styles.input}
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            id="psw-repeat"
            required
          />
  <label htmlFor="options">
            <b>Select if you are an person who are searching for jobs or a company that has jobs to offer</b>
          </label>
          <div className={styles.dropdownContainer}>
        
            <select id="dropdown" className={styles.dropdownInput}>
              <option value="person">{"Person (employee)"}</option>
              <option value="company">Company</option>
       
            </select>
        
          </div>
          <hr className={styles.hr} />
          <p>
            By creating an account you agree to our{" "}
            <a href="#">Terms & Privacy</a>.
          </p>

          <button className={styles.signInBtn} type="submit">
            Sign in
          </button>
        </div>

        <div className={styles.signin}>
          <p>
            Already have an account? <a href="#">Sign in</a>.
          </p>
        </div>
      </form>
  
    </div>
  );
};
export default Singin;
