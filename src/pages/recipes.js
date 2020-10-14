import React, { useState } from 'react';
import * as JsSearch from 'js-search';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import Layout from '../components/Layout';
import GetRecipeData from '../utils/getRecipeData';
import Search from '../components/Search';

export default function RecipesPage() {

  // *************************************************************
  // Access recipe state held in Context
  const { recipes } = GetRecipeData();

  // *************************************************************
  const [query, setQuery] = useState([]);


  // *************************************************************
  // Establish recipe search index
  const recipeSearch = new JsSearch.Search('id');

  // Creates an index strategy. There are other indexing strategies available: https://github.com/bvaughn/js-search#configuring-the-index-strategy
  recipeSearch.indexStrategy = new JsSearch.PrefixIndexStrategy();

  // Makes it okay for words to be lowercase
  recipeSearch.sanitizer = new JsSearch.LowerCaseSanitizer();

  // Term frequency-inverse document frequency search index
  // Determines how important words are in a document.
  recipeSearch.searchIndex = new JsSearch.TfIdfSearchIndex('id');

  recipeSearch.addIndex('title');
  // recipeSearch.addIndex('tags');

  recipeSearch.addDocuments(recipes);

  console.log(recipeSearch);
  console.log(recipeSearch.search("California"));

  // ************************************************************
  // SEARCH FUNCTION
  function searchData(searchValue) {
    const queryResult = recipeSearch.search(searchValue);
    setQuery(queryResult);
  }

  // ************************************************************
  // Form Initialization



  return (
    <>
      <Layout>

        <h2>Recipes</h2>

        <Search 
          searchData={searchData}
          // useQuery={useQuery}
        />

        {!query.length 
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
          query.map(result => (
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


        {}

      </Layout>
    </>
    
  )

}