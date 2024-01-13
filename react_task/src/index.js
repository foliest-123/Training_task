import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import { BrowserRouter as Router } from 'react-router-dom';


const Root = () => {
    return(
    <>
    <Router>
      <Home/>
    </Router>
        
    </>
  )
    };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);
reportWebVitals();
