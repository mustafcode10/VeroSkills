// export const isAuthenticated =()=>{
//     return localStorage.getItem("auth") === "true"
// }

// export const login =()=> {
//     return localStorage.setItem("auth", "true")
// }


// export const logout =()=> {
//     return localStorage.removeItem("auth")
// }


// src/auth.js
export const isAuthenticated = () => {
    return localStorage.getItem('auth') === 'true';
  };
  
  // Hardcoded credentials
  const VALID_USERNAME = 'mustaf';
  const VALID_PASSWORD = '123456';
  
  export const login = (username, password) => {
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      localStorage.setItem('auth', 'true');
      return true;
    }
    return false;
  };
  
  export const logout = () => {
    localStorage.removeItem('auth');
  };
  