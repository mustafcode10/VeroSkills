import { useState } from "react";
import { Modal } from "./Components/Modal";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
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
  );
}

export default App;
