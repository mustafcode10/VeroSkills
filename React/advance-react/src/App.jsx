import { useState } from 'react'
import './App.css'
import UserProvider from './components/UserContext'
import User from './components/User'
import Todos from './components/Todos'
import Form from './components/Form'
import ParentComponent from './components/ParentComponent'
import Modal from './components/Modal'

function App() {
 const [showModal, setShowModal] = useState(true);

  return (
    <>
    <UserProvider>
      <User>
        <p>hello world</p>
      </User>

      <Todos title="This app is todo list app"/>

      <Form  title ="Sign up"/>
      <ParentComponent />
      
      <div>
      <h1>My React App</h1>
      <button onClick={() => setShowModal(!showModal)}>Toggle Modal</button>
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <h2>Modal Content</h2>
          <p>Hello, from the awesome portal window!</p>
        </Modal>
      )}
    </div>
    </UserProvider>
    </>
  )
}

export default App



// Implement a simple Context API setup to manage user authentication state across your React application.