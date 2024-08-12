import React from "react";
import Recipe from "./Recipe";

import "../styles.css";
import Recipes from "../recipe-data.json";

export default function App() {
  return (
    <>
      <h1>My Favorite Recipes</h1>
      <div className="container">
        {Recipes.map((recipe) => (
          <Recipe data={recipe} key={recipe.idMeal} />
        ))}
      </div>
    </>
  );
}
