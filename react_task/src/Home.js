import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import App from './App';
import Login from './Components/Tasks/Task5/Login/Login';
import Signup from './Components/Tasks/Task5/signup/Sign-up';
import Task6 from './Components/Tasks/Task6/Task6';

const Home = () => {
  const [loggedin, setloggedin] = useState(false);

  const handleLogin = (response, message) => {
    if (response && response.code === 200) {
      setloggedin(true);
    }
  };

  return (
    <div>
      {loggedin ? (
        <App />
      ) : (
        <ul>
          <li><Link to="/Login">Login</Link></li>
          <li><Link to="/Signup">Signup</Link></li>
          <li><Link to="/Task6">cl-Login</Link></li>
        </ul>
      )}

      <Routes>
        <Route exact path="/Login" element={<Login onLogin={handleLogin} />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/Task6" element={<Task6 />} />
      </Routes>
    </div>
  );
};

export default Home;
 