import React from 'react'
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({ auth: isAuthenticate, children }) => {
    console.log(isAuthenticate)
    return isAuthenticate ? children : <Navigate to="/login" />
  }

  export default PrivateRoute
