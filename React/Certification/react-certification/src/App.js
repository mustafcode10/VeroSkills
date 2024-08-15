import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import Timer from './components/Timer';



function App() {
  return (
    <>
        <div className="App">
      <Greeting name ="Manoj" title= "Software Engineer"/>
      <h1> HELLO WORLD</h1>
      <Counter />
      <Timer />

    </div>
    </>

  );
}

export default App;



// Write a simple React functional component called Greeting that takes a name prop and renders "Hello, [name]!".

// Create a React component called Counter that uses the useState hook to display and update a count value. Include buttons to increment and decrement the count.