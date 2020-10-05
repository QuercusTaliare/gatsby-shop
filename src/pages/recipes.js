import React from 'react';
import GetRecipeData from '../utils/getRecipeData';

export default function RecipesPage() {

  const { recipes } = GetRecipeData();

  

  return (
    <>
      <h2>Recipes</h2>
      
      {recipes.map(recipe => (
        <div>
          <h3>{recipe.title}</h3>
          <p>{recipe.directions}</p>
          <img 
            src={recipe.photoUrl} 
            alt={recipe.title}
            height="400"
          
            
          />
        </div>
      ))}
    </>
    
  )

}