import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    "Learn React",
    "Write code",
    "Read a abook",
  ]);

  const [player, setPlayer] = useState({name: 'Mustaf', score: 0});
  return (
    <>
      <h2>TODOS</h2>
      <button onClick={() => setTodos([...todos, "Read Docs"])}>
        Add todo
      </button>
      <button onClick={()=> setTodos(todos.filter(todo => todo !== 'Read a abook'))}>
        Remove todo
      </button>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
     <button onClick={()=> setPlayer(player => ({...player, score: player.score + 1}))}>{player.name} | {player.score}</button>
    </>
  );
}

export default App;
