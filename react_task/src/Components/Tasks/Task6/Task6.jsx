import React, { Component } from "react";
import { createBrowserHistory } from "history";


class Task6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      result: null,
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = this.state;
    const history = createBrowserHistory({forceRefresh:true});
    const response = await fetch("https://app.qualdo.ai/iam/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Api-type": "qualdo_db_auth",
      },
    });
    const result = await response.json();
    console.log(data);
    this.setState({ result });
    if (result.code === 200) {
        history.push('/')
    }
  };

  handleInputChange = (e, field) => {
    const { data } = this.state;
    this.setState({ data: { ...data, [field]: e.target.value } });
  };

  render() {
    const { result } = this.state;
   
    return (
      <div className="container">
        <div className="login">
          <h1>Login</h1>
          {result ? (
            <h3 style={{ color: "red", textTransform: "uppercase" }}>{result.message}</h3>
          ) : (
            <h1></h1>
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
              onChange={(e) => this.handleInputChange(e, "email")}
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
              onChange={(e) => this.handleInputChange(e, "password")}
            />

            <div className="remember-forgot">
              <label>
                <input type="checkbox" name="remember" /> Remember me
              </label>
              <p>Forgot Password?</p>
            </div>

            <div className="buttons">
              {/* Use Link component for navigation */}
              <button type="button">Sign Up</button>
              <button type="submit" onClick={this.handleSubmit}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

// Use `withRouter` to access `history` prop for navigation
export default (Task6);
