import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import DisplayValues from './Components/apicall/DisplayValues'
import Task1 from './Components/Tasks/Task1/task1'
import Task2 from './Components/Tasks/Task2/Task2';
import Task3 from './Components/Tasks/Task3/Task3';
import Task4 from './Components/Tasks/Task4/Task4';
import Login from './Components/Tasks/Task5/Login/Login'
import Signup from './Components/Tasks/Task5/signup/Sign-up';
import Task6 from './Components/Tasks/Task6/Task6';
import PrivateRoute from './Components/Tasks/PrivateRoute';


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
            <li>
                <Link to="/Task3">Task3</Link>
            </li>
            <li>
                <Link to="/Task4">Task4</Link>
            </li>
            <li>
                <Link to="/Login">Login</Link>
            </li>
            <li>
                <Link to="/Signup">Signup</Link>
            </li>
            <li>
                <Link to="/Task6">cl-Login</Link>
            </li>
            <li>
                <Link to="/" onClick={localStorage.setItem('Login' ,false)}>Logout</Link>
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
                    element={
                        <PrivateRoute >
                          <DisplayValues />
                        </PrivateRoute>
                      }
                ></Route>
            <Route
                exact
                path="/Task1"
                element={
                    <PrivateRoute>
                <Task1/>
                </PrivateRoute>
            }
            ></Route>
            <Route
                exact
                path="/Task2"
                element={
                    <PrivateRoute>
                <Task2/>
                </PrivateRoute>
            }
            ></Route>
             <Route
                exact
                path="/Task3"
                element={
                <PrivateRoute>
                <Task3/>
                </PrivateRoute>
                }
            ></Route>
             <Route
                exact
                path="/Task4"
                element={<PrivateRoute>
                    <Task4/>
                    </PrivateRoute>}
            ></Route>
             <Route
                exact
                path="/Login"
                element={<Login />}
            ></Route>
            <Route
                exact
                path="/Signup"
                element={<Signup/>}
            ></Route>
            <Route
                exact
                path="/Task6"
                element={<Task6/>}
            ></Route>
        </Routes>
    </div>
</Router>
  </React.StrictMode>
);


reportWebVitals();
