import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DisplayValues from './Components/apicall/DisplayValues'
import Task1 from './Components/Tasks/Task1/task1'
import Task2 from './Components/Tasks/Task2/Task2';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <div className="App">
        <ul className="App-header">
        <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/DisplayValues">
                    SimpleApiCall
                </Link>
            </li>
            <li>
                <Link to="/Task1">Task1</Link>
            </li>
            <li>
                <Link to="/Task2">Task2</Link>
            </li>
        </ul>
        <Routes>
        <Route
                exact
                path="/"
                element={<App/>}
            ></Route>
                <Route
                    exact
                    path="/DisplayValues"
                    element={<DisplayValues/>}
                ></Route>
            <Route
                exact
                path="/Task1"
                element={<Task1/>}
            ></Route>
            <Route
                exact
                path="/Task2"
                element={<Task2/>}
            ></Route>
        </Routes>
    </div>
</Router>
  </React.StrictMode>
);


reportWebVitals();
