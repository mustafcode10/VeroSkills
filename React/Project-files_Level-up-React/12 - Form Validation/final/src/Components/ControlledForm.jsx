import { useState } from "react";
export function ControlledForm() {
  const [name, setName] = useState("");
  const handleChange = event => {
    setName(event.target.value);
  };
  console.log(name);
  return (
    <form>
      <label>Name:</label>
      <input type="text" value={name} onChange={handleChange} />
    </form>
  );
}
