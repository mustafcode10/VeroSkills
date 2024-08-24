import { useState, useEffect, createContext } from "react";

export const DogImageContext = createContext();

export function DogImageProvider({ children }) {
  const [dogImages, setDogImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://dog.ceo/api/breed/hound/images/random/50")
      .then(response => response.json())
      .then(data => setDogImages(data.message))
      .catch(e => console.error("Error: ", e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <DogImageContext.Provider value={{ dogImages, loading }}>
      {children}
    </DogImageContext.Provider>
  );
}
