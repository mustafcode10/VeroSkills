import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    "Learn React",
    "Write code",
    "Read a book",
  ]);

  const [player, setPlayer] = useState({ name: "Guil", score: 0 });

  return (
    <>
      <h2>TODOS</h2>
      <button onClick={() => setTodos([...todos, "Read Docs"])}>
        Add todo
      </button>
      <button
        onClick={() => setTodos(todos.filter(todo => todo !== "Learn React"))}
      >
        Remove todo
      </button>
      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>

      <button
        onClick={() =>
          setPlayer(player => ({ ...player, score: player.score + 1 }))
        }
      >
        {player.name} | {player.score}
      </button>
    </>
  );
}

export default App;
