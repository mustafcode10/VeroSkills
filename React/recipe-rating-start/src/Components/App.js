import React from "react";
import "../styles.css"
import Recipe from "./Recipe";

import recipes from "../recipe-data.json"



export default function App () {
    return (
        <>
           <h1> My favorite recipes</h1>
           <div className="container">
            {recipes.map(recipe => <Recipe data={recipe} key={recipe.idMeal} />)}
           </div>
   
        </>
     
    )

    }