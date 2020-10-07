import React from 'react';
import Layout from '../components/Layout';
import GetRecipeData from '../utils/getRecipeData';

export default function RecipesPage() {

  // Recipe state held in Context
  const { recipes } = GetRecipeData();

  

  return (
    <>
      <Layout>

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

      </Layout>
    </>
    
  )

}