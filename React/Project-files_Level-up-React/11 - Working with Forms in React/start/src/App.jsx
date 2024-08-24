import { useState } from "react";
import { ControlledForm } from "./Components/ControlledForm";
import { UncontrolledForm } from "./Components/UncontrolledForm";
import "./App.css";

function App() {
  return (
    <>
      <h1>My React Forms</h1>
      <ControlledForm />
    </>
  );
}

export default App;
