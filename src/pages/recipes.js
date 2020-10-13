import React from 'react';
import * as JsSearch from 'js-search';
import Layout from '../components/Layout';
import GetRecipeData from '../utils/getRecipeData';

export default function RecipesPage() {

  // Recipe state held in Context
  const { recipes } = GetRecipeData();

  // console.log(recipes);

  const recipeSearch = new JsSearch.Search('id');

  recipeSearch.indexStrategy = new JsSearch.PrefixIndexStrategy();

  recipeSearch.sanitizer = new JsSearch.LowerCaseSanitizer();

  recipeSearch.searchIndex = new JsSearch.TfIdfSearchIndex('id');

  recipeSearch.addIndex('title');
  // recipeSearch.addIndex('tags');

  recipes.forEach(recipe => {
    recipeSearch.addDocuments(recipe);
  })

  console.log(recipeSearch);
  console.log(recipeSearch.search("California"));

  



  // const theGreatGatsby = {
  //   isbn: '9781597226769',
  //   title: 'The Great Gatsby',
  //   author: {
  //     name: 'F. Scott Fitzgerald'
  //   },
  //   tags: ['book', 'inspirational']
  // };

  // const theDaVinciCode = {
  //   isbn: '0307474275',
  //   title: 'The DaVinci Code',
  //   author: {
  //     name: 'Dan Brown'
  //   },
  //   tags: ['book', 'mystery']
  // };

  // const angelsAndDemons = {
  //   isbn: '074349346X',
  //   title: 'Angels & Demons',
  //   author: {
  //     name: 'Dan Brown',
  //   },
  //   tags: ['book', 'mystery']
  // };

  // let search = new JsSearch.Search('isbn');

  // search.addIndex('title');
  // search.addIndex(['author', 'name']);
  // search.addIndex('tags');

  // search.addDocuments([theGreatGatsby, theDaVinciCode, angelsAndDemons]);

  // console.log(search)
  // console.log(search.search("The"));

  return (
    <>
      <Layout>

        <h2>Recipes</h2>
        
        {recipes.map(recipe => (
          <div key={recipe.title}>
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