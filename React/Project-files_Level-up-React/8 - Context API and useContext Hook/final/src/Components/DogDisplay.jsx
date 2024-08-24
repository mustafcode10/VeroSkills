import { useContext } from "react";
import { DogImageContext } from "./DogImageContext";

export default function () {
  const { dogImage, fetchDogImage, loading } = useContext(DogImageContext);

  return (
    <div className="dog-display">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <img src={dogImage} alt="A Random Dog" />
          <button onClick={fetchDogImage}>Load New Dog Image</button>
        </>
      )}
    </div>
  );
}
