import { useState } from 'react';

function Todos({ title }) {
    const [todos, setTodos] = useState([{ name: 'React' }, { name: 'JavaScript' }]);
    const [todo, setTodo] = useState("");
    const [player, setPlayer] = useState({name: 'Mustaf', score: 0});

    const addTodo = () => {
        setTodos([...todos, { name: todo }]);
        setTodo('')
    }

    const removeTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    }

    return (
        <>
            <h1>{title}</h1>
            <label htmlFor="todoInput">Enter Todo</label>
            <input
                id="todoInput"
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button onClick={addTodo}>Add Todo</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo.name} 
                        <button onClick={() => removeTodo(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <button onClick={()=> setPlayer((player)=> ({...player, score: player.score + 1}))}>player </button>
            <p>{player.name} | {player.score}</p>

        </>
    )
}

export default Todos;
