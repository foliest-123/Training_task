import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import Task1 from './Components/Tasks/Task1/task1';
import Task2 from './Components/Tasks/Task2/Task2';
import Task3 from './Components/Tasks/Task3/Task3';
import Task4 from './Components/Tasks/Task4/Task4';
import DisplayValues from './Components/apicall/DisplayValues';
import Home from './Home';

const App = () => {
  const [loggedout, setLoggedOut] = useState(false);

  const handleLogout = () => {
    setLoggedOut(true);
    console.log(loggedout)
  };

  return (
    <div className="App">
      {!loggedout ? (
        <ul className="App-header">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/DisplayValues">SimpleApiCall</Link></li>
          <li><Link to="/Task1">Task1</Link></li>
          <li><Link to="/Task2">Task2</Link></li>
          <li><Link to="/Task3">Task3</Link></li>
          <li><Link to="/Task4">Task4</Link></li>
          <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
        </ul>
      ) : (
        <Home />
      )}

     <Routes>
              <Route exact path="/DisplayValues" element={<DisplayValues />} />
              <Route exact path="/Task1" element={<Task1 />} />
              <Route exact path="/Task2" element={<Task2 />} />
              <Route exact path="/Task3" element={<Task3 />} />
              <Route exact path="/Task4" element={<Task4 />} />
    </Routes>

    </div>
  );
};

export default App;
