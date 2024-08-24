import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";

export default function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(response => response.json())
      .then(data => setCategories(data.categories))
      .catch(error => console.error("Error:", error));
  }, []);

  return (
    <>
      <h1>My Favorite Recipes</h1>
      <div className="categories">
        <label htmlFor="categorySelect">Select Category: </label>
        <select id="categorySelect">
          {categories.map(category => (
            <option value={category.strCategory} key={category.idCategory}>
              {category.strCategory}
            </option>
          ))}
        </select>
      </div>
      <div className="container"></div>
    </>
  );
}
