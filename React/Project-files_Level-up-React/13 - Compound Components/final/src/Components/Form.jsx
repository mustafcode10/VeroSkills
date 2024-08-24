import { useState, useRef } from "react";

export function Form() {
  const userNameRef = useRef(null);
  const pwRef = useRef(null);
  const [message, setMessage] = useState("");

  const handleSubmit = event => {
    event.preventDefault();

    if (!userNameRef.current.value) {
      setMessage("Username is required!");
      return;
    }

    if (!pwRef.current.value) {
      setMessage("Invalid password!");
      return;
    }

    setMessage(`Signup Successful: ${userNameRef.current.value}`);
    event.target.reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" ref={userNameRef} />

        <label>Password:</label>
        <input type="password" autoComplete="current-password" ref={pwRef} />

        <button type="submit">Signup</button>
      </form>
      <p>{message}</p>
    </>
  );
}
