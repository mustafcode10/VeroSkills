
import './App.css';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import Timer from './components/Timer';
import ErrorBoundary from './components/ErrorBoundary';
import Data from './components/Data';





function App() {
  return (
    <>
        <div className="App">
      <Greeting name ="Manoj" title= "Software Engineer"/>
      <h1> HELLO WORLD</h1>
      <ErrorBoundary>
      <Counter />
      </ErrorBoundary>
      <Timer />
      <Data />


    </div>
    </>

  );
}

export default App;









