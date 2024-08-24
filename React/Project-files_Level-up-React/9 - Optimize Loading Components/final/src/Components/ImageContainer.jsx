import { useContext } from "react";
import { DogImageContext } from "./DogImageContext";

export default function () {
  const { dogImages } = useContext(DogImageContext);
  return (
    <>
      <div className="dog-display">
        <>
          <ul className="image-grid">
            {dogImages.map((img, i) => (
              <li key={i}>
                <img src={img} alt="A dog!" />
              </li>
            ))}
          </ul>
        </>
      </div>
    </>
  );
}
