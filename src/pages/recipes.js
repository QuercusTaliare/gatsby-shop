import React, { useState } from 'react';

import Layout from '../components/Layout';
import Search from '../components/Search';
import GetRecipeData from '../utils/getRecipeData';
import createSearchIndex from '../utils/createSearchIndex';

export default function RecipesPage() {

  // Access recipe state held in Context
  const { recipes } = GetRecipeData();

  const [queryResult, setQueryResult] = useState([]);

  // Create search index with utility function createSearchIndex
  const recipeSearch = createSearchIndex('id', ['title'], recipes);

  // SEARCH FUNCTION
  function searchData(searchValue) {

    const result = recipeSearch.search(searchValue);

    setQueryResult(result);

  }

  function searchDataArray(searchValueArray) {

    const allResults = searchValueArray.map(searchValue => {
      const result = recipeSearch.search(searchValue);

      return result;
    })

    console.log(allResults);

  }

  // searchData("rice");

  return (
    <>
      <Layout>

        <h2>Recipes</h2>

        <Search 
          searchData={searchData}
          searchDataArray={searchDataArray}
        />

        {!queryResult.length 
          ? 
          recipes.map(recipe => (
            <div key={recipe.title}>
              <h3>{recipe.title}</h3>
              <p>{recipe.directions}</p>
              <img 
                src={recipe.photoUrl} 
                alt={recipe.title}
                height="400"
                />
            </div>
          ))
          :
          queryResult.map(result => (
            <div key={result.id}>
              <h3>{result.title}</h3>
              <p>{result.directions}</p>
              <img 
                src={result.photoUrl} 
                alt={result.title} 
                height="400" 
              />
            </div>
          ))
        }

      </Layout>
    </>
    
  )

}