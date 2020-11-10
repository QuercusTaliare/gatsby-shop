import React, { useState } from 'react';

import Layout from '../components/Layout';
import Search from '../components/Search';
import GetRecipeData from '../utils/getRecipeData';
import createSearchIndex from '../utils/createSearchIndex';
import GetProducts from '../utils/getProducts';

export default function RecipesPage() {

  const [ products ] = GetProducts();

  // Access recipe state held in Context
  const { recipes } = GetRecipeData();

  const [queryResult, setQueryResult] = useState([]);

  // Create search index with utility function createSearchIndex
  const recipeSearch = createSearchIndex('id', ['title', 'directions'], recipes);

  // SEARCH DATA FUNCTION
  // searchValue: string
  // NO LONGER PASSED DOWN: this can probably be deleted
  function searchData(searchValue) {

    const result = recipeSearch.search(searchValue);

    setQueryResult(result);

  }

  // SEARCH DATA ARRAY FUNCTION 
  // searchValueArray: array of strings
  // Creates a 2-dimensional array of all the results for each search tag
  // Sorts through all the results, and finds only the common results
  // Sets the queryResult state, which triggers a render
  function searchDataArray(searchValueArray) {

    const allResults = searchValueArray.map(searchValue => {

      const result = recipeSearch.search(searchValue);

      return result;

    })

    const commonItems = allResults.reduce((commonItems, currentItem) => {
      
      return commonItems.filter(recipe => currentItem.includes(recipe));

    })

    setQueryResult(commonItems);
    
  }

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
          // recipes.map(recipe => (
          //   <div key={recipe.title}>
          //     <h3>{recipe.title}</h3>
          //     <p>{recipe.directions}</p>
          //     <img 
          //       src={recipe.photoUrl} 
          //       alt={recipe.title}
          //       height="400"
          //       />
          //   </div>
          // ))
          null
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