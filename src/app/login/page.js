import styles from "./page.module.css"

const Login =()=>{

    return(

 <div >
    {/* inside form shoud be "action" to get data from user */}
    <form >   
      <div className={styles.container}>
        <h1>Log in</h1>
        <h2> welcome to the website </h2>
        <h4>Please fill in this form to create an account.</h4>
        <hr className={styles.hr}/>

        <label htmlFor="email"><b>Email</b></label>
        <input className ={styles.input}  type="text" placeholder="Enter Email" name="email" id="email" required />

        <label htmlFor="psw"><b>Password</b></label>
        <input className ={styles.input}  type="password" placeholder="Enter Password" name="psw" id="psw" required />

       <hr className={styles.hr}/>
        <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

        <button className={styles.logInBtn} type="submit"  >Log in</button>
      </div>

      <div className={styles.signin}>
        <p>Already have an account? <a href="#">Sign in</a>.</p>
      </div>
    </form>


 </div>


    )
}

export default Login