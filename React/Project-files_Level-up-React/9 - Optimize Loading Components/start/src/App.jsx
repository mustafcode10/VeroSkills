import ImageContainer from "./Components/ImageContainer";
import { DogImageProvider } from "./Components/DogImageContext";
import "./App.css";

function App() {
  return (
    <>
      <DogImageProvider>
        <h1>Dog Images</h1>
        <ImageContainer />
      </DogImageProvider>
    </>
  );
}

export default App;
