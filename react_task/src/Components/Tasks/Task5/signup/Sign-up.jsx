import React from "react";
import style from '../../../../Styles/Signup.module.css';

const Signup = () => {
  return (
    <div className={style.container}>
      <div className={style.signup}>
        <h1>Sign-up</h1>
        <form>
          <div className={style.input}></div>
          <input type="email" id="fname" name="fname" placeholder="Email" className={style.inputField} />
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Full Name"
            className={style.inputField}
          />
          <input
            type="text"
            id="Company"
            name="Company"
            placeholder="Company"
            className={style.inputField}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className={style.inputField}
          />
          <input
            type="password"
            id="c-password"
            name="c-password"
            placeholder="Confirm password"
            className={style.inputField}
          />
          <input
            type="number"
            id="Number"
            name="Number"
            placeholder="Mobile Number"
            className={style.inputField}
          />
          <div className={style.button}>
            <button type="button">Join Existing Team</button>
            <button type="submit">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
