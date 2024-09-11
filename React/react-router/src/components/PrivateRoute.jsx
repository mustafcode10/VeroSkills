// src/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ children }) => {
  const { auth } = useAuth(); // Use context to check authentication
  return auth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;







// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { isAuthenticated } from './Auth';

// const PrivateRoute = ({ children }) => {
//   return isAuthenticated() ? children : <Navigate  to={"/login"} />
// };

// export default PrivateRoute;