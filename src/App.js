import React, {useState, useEffect} from 'react';
import Logo from './img/red-white-logo.png';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles["app"]}>
      <div className={styles["grid"]}>
        <div className={styles["rail"]}>
          <img src={Logo} altText={'logo'} />
          <div className={styles["help-text"]}>
            <h3>Need Help?</h3>
            <h4>Chapman Service Desk</h4>
            <p>Assistance available Monday-Friday<br/>8:00AM-5:00PM<br/><br/> Contact us:<br></br>(714) 997-6600<br/><a href="#">Chapman University Service Desk</a></p>
          </div>
        </div>
        <div className={styles["content"]}>
          <form>
            <h1>Student Login Portal</h1>
            <div className={styles['form-fields']}>
              <label htmlFor="username">Username</label>
              <input type="text" name="username" tabIndex={0} />
              <label htmlFor="password">Password</label>
              <input type="password" name="username" tabIndex={0} />
              <button tabIndex={0}>Log In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;