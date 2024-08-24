import { useState, useRef } from "react";

export function UncontrolledForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const [message, setMessage] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    setMessage(
      `Info submitted: ${nameRef.current.value} and ${emailRef.current.value}`
    );
    event.target.reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" ref={nameRef} />

        <label>Email:</label>
        <input type="email" ref={emailRef} />

        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </>
  );
}
