// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const isValid = login(username, password);
    if (isValid) {
      navigate('/');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Log In</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Login;






// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { login } from './Auth';

// function Login() {
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     login();
//     navigate('/');
//   };

//   return (
//     <div>
//       <h2>Login Page</h2>
//       <button onClick={handleLogin}>Log In</button>
//     </div>
//   );
// }

// export default Login;



// src/Login.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { login } from './Auth';

// function Login() {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = () => {
//     const isValid = login(username, password); // Call the login function with username and password
//     if (isValid) {
//       navigate('/'); // Redirect to the home page on successful login
//     } else {
//       setError('Invalid username or password'); // Show error if credentials are wrong
//     }
//   };

//   return (
//     <div>
//       <h2>Login Page</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <br />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <br />
//       <button onClick={handleLogin}>Log In</button>
//       {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
//     </div>
//   );
// }

// export default Login;
