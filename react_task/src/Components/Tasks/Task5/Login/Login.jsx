import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../../../Styles/Login.scss";

const Task5 = ({onLogin}) => {
  const [data, setData] = useState({});
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://app.qualdo.ai/iam/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Api-type": "qualdo_db_auth",
      },
    });
    const result = await response.json();
    console.log(result);
    let value ="bye"
    setResult(result);
    if (result.code === 200) {
      navigate("/");
      value = "hii"
      onLogin(result ,value);

    } else {
      onLogin(null);
    }
  };

  return (
    <div className="container">
      <div className="login">
        <h1>Login</h1>
        {result ? (
          <h3 style={{ color: "red", textTransform: "uppercase" }}>
            {result.message}
          </h3>
        ) : (
          <></>
        )}
        <form>
          <label htmlFor="email">
            Email Address <span>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            required
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />

          <label htmlFor="password">
            Password <span>*</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            required
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />

          <div className="remember-forgot">
            <label>
              <input type="checkbox" name="remember" /> Remember me
            </label>
            <p>Forgot Password?</p>
          </div>

          <div className="buttons">
            <Link to="/Signup">
              <button type="button">Sign Up</button>
            </Link>
            <button type="submit" onClick={handleSubmit}>
              Login
            </button>
            {/* {<PrivateRoute auth={isAuthenticated}/>} */}
          </div>
        </form>
      </div>
      </div>
  );
};

export default Task5;
