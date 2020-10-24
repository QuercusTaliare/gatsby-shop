import { useEffect, useContext } from 'react';
import RecipeContext from '../components/RecipeContext';

export default function GetRecipeData() {
  const [recipes, setRecipes] = useContext(RecipeContext);

  useEffect(function() {

    const fetchRecipes = async () => {

      await fetch('https://sampleapis.com/recipes/api/recipes', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        
        console.log(res);
        
        return res.json()
      }).then(res => {
        setRecipes(res)
      })

      console.log("fetched!!!")

    }

    fetchRecipes();

  }, [])

  return (
    {
      recipes
    }
  )


}