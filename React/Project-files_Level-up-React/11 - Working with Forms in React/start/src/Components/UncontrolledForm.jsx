export function UncontrolledForm() {
  return (
    <>
      <form>
        <label>Name:</label>
        <input type="text" />

        <label>Email:</label>
        <input type="email" />

        <button type="submit">Submit</button>
      </form>
      <p></p>
    </>
  );
}
