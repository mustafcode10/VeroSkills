import React from 'react'

import RecipeRating from './RecipeRating'

function Recipe({data}) {
    console.log(data)
    
  return (
    <div className='card'>
        <div >
            <img src={data.strMealThumb} alt={data.strMeal} />
        </div>
      <p>{data.strMeal}</p>
      <span>
        {data.strCategory} | <a href={data.strYoutube} target="_blank" rel="noreferrer" >View video</a>
      </span>
      <RecipeRating />
    

    </div>
    



  )
}

export default Recipe