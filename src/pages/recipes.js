import React from 'react';
import lunr from 'lunr';
import Layout from '../components/Layout';
import GetRecipeData from '../utils/getRecipeData';

export default function RecipesPage() {

  // Recipe state held in Context
  const { recipes } = GetRecipeData();

  const idx = lunr(function() {

    console.log(this);
    this.field("title")
    this.field("directions")

    // recipes.forEach(function(recipe) {
    //   this.add(recipe)
    // })

  })

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