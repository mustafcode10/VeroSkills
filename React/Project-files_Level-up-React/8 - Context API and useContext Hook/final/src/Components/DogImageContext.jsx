import { createContext, useState, useEffect } from "react";

export const DogImageContext = createContext();

export function DogImageProvider({ children }) {
  const [dogImage, setDogImage] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchDogImage = () => {
    setLoading(true);
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data => {
        setDogImage(data.message);
      })
      .catch(error => {
        console.error("Error fetching dog image:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Fetch a new dog image when the component mounts
  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <DogImageContext.Provider value={{ dogImage, fetchDogImage, loading }}>
      {children}
    </DogImageContext.Provider>
  );
}
