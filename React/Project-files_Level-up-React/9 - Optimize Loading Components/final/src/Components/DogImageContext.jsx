import { useState, useEffect, createContext } from "react";

export const DogImageContext = createContext();

export function DogImageProvider({ children }) {
  const [dogImages, setDogImages] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breed/hound/images/random/50")
      .then(response => response.json())
      .then(data => setDogImages(data.message))
      .catch(e => console.error("Error: ", e));
  }, []);

  return (
    <DogImageContext.Provider value={{ dogImages }}>
      {children}
    </DogImageContext.Provider>
  );
}
