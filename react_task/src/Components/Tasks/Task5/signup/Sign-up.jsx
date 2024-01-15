import React, { useState } from "react";
import style from '../../../../Styles/Signup.scss';

const Signup = () => {

const [result , setresult] = useState({})

const deletes=({
            email: "gijavo@mailinator.com",
            first_name: "gofavaqy",
            last_name: "gofavaqy",
            company: "Navarro and Lee LLC",
            password: "Pa$$w0rd!",
            phone_number: "+1 (856) 359-9348",
            user_signup_type: "qualdo_db_auth",
            username: "gofavaqy"
})

 const senddata = async(e) =>{
      e.preventDefault()
      const response = await fetch("https://app.qualdo.ai/iam/login", {
        method: "POST",
        body: JSON.stringify(deletes),
        headers: {
          "Content-Type": "application/json",
          "Api-type": "qualdo_db_auth",
        },
      });
      const res = await response.json()
      console.log(res)
      console.log(result)
}

  return (
    <div className={"container"}>
      <div className={"signup"}>
        <h1>Qualdo <span>TM</span> </h1>
        <form>
          <div className={"input"}></div>
          <input type="email" id="email" name="email" placeholder="Email" className={"inputField"} onChange={(e) => setresult({...result , email : e.target.value})}/>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Full Name"
            className={"inputField"}
            onChange={(e) => setresult({ ...result, first_name:e.target.value , last_name:e.target.value,  username:e.target.value})}
          />
          <input
            type="text"
            id="Company"
            name="Company"
            placeholder="Company"
            className={"inputField"}
            onChange={(e) => setresult({...result,company : e.target.value})}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className={"inputField"}
            onChange={(e) => setresult({...result,password: e.target.value})}
          />
          <input
            type="password"
            id="c-password"
            name="c-password"
            placeholder="Confirm password"
            className={"inputField"}
          />
          <input
            type="number"
            id="Number"
            name="Number"
            placeholder="Mobile Number"
            className={"inputField"}
            onChange={(e) => setresult({...result,phone_number: e.target.value})}
          />
          <div className={"button"}>
            <button type="button">Join Existing Team</button>
            <button type="submit" onClick={senddata}>Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
