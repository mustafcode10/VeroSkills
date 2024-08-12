import React from "react";
import RecipeRating from "./RecipeRating";

export default function Recipe({ data }) {
  return (
    <div className="card">
      <div>
        <img src={data.strMealThumb} alt={data.strMeal} />
      </div>
      <h2>{data.strMeal}</h2>
      <span>
        {data.strCategory} |{" "}
        <a href={data.strYoutube} target="_blank" rel="noreferrer">
          View video
        </a>
      </span>
      <RecipeRating />
    </div>
  );
}
