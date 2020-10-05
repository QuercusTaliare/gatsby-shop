import { useEffect, useState } from 'react';

export default function GetRecipeData() {
  const [recipes, setRecipes] = useState();

  useEffect(function() {

    fetch('https://sampleapis.com/recipes/api/recipes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()).then(res => {
      setRecipes(res)
    })

  }, [])

  return (
    {
      recipes
    }
  )


}