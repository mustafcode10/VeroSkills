// import './App.css'
// import UserProvider from './components/UserContext'
// import User from './components/User'
// import Form from './components/Form'
// import ParentComponent from './components/ParentComponent'




// function App() {
//   return (
//     <>
//     <UserProvider>
//       <User />  
//       <Form title ='sign up' />
//       {/* <ChilCompenent>
//         <h>hi i am children from parent</h>
//         <Display />
//       </ChilCompenent> */}

//       <ParentComponent />
//     </UserProvider>
//     </>
//   )
// }

// export default App



// Implement a simple Context API setup to manage user authentication state across your React application.


// How do you manage objects as state with useState hook? Show example.




import React, { useState } from 'react';
import ChildComponent from './components/ChildCompenent';

const App = () => {
  const [message, setMessage] = useState('');

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div>
      <h1>Message from Child: {message}</h1>
      <ChildComponent onSendMessage={handleMessage} />
    </div>
  );
};

export default App;