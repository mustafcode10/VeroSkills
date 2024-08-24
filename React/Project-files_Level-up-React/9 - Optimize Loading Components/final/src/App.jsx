import { Suspense, lazy } from "react";
import { DogImageProvider } from "./Components/DogImageContext";
import "./App.css";

const ImageContainer = lazy(() => import("./Components/ImageContainer"));

function App() {
  return (
    <>
      <DogImageProvider>
        <h1>Dog Images</h1>
        <Suspense fallback={<h2>Loading...</h2>}>
          <ImageContainer />
        </Suspense>
      </DogImageProvider>
    </>
  );
}

export default App;
