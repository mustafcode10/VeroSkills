import { useContext } from "react";
import { DogImageContext } from "./DogImageContext";

export default function () {
  const { dogImages, loading } = useContext(DogImageContext);
  return (
    <>
      <div className="dog-display">
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <ul className="image-grid">
              {dogImages.map((img, i) => (
                <li key={i}>
                  <img src={img} alt="A dog!" />
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
}
