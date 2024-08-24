import { Toggle } from "./Components/ToggleContext";
import { ToggleOn } from "./Components/ToggleOn";
import { ToggleOff } from "./Components/ToggleOff";
import { ToggleButton } from "./Components/ToggleButton";
import { Form } from "./Components/Form";
import "./App.css";

function App() {
  return (
    <Toggle>
      <ToggleButton />
      <ToggleOn>
        <div className="signup">
          <h2>Sign Up</h2>
          <Form />
        </div>
      </ToggleOn>
      <ToggleOff>
        <h2>The toggle is Off!</h2>
      </ToggleOff>
    </Toggle>
  );
}

export default App;
