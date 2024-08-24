import { DogImageProvider } from "./Components/DogImageContext";
import DogImageDisplay from "./Components/DogDisplay";
import "./App.css";

function App() {
  return (
    <DogImageProvider>
      <div className="app">
        <h1>Random Dog Images</h1>
        <DogImageDisplay />
      </div>
    </DogImageProvider>
  );
}

export default App;
