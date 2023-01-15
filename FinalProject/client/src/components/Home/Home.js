import './Home.css'
import { RecipeCard } from "../RecipeCard/RecipeCard";
import { useState,useEffect } from 'react';

export const Home = () => {

  // console.log((localStorage.getItem('token')))

  let [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {            
        const response = await fetch ('/api/v1/recipes',
        {
            method: 'get',
        });
        let rez = await response.json();
        console.log(rez);
        setRecipes(rez);
        return rez

    } catch (err) {
        console.log(err);
    }
};

useEffect(() => {
  let rez = fetchRecipes();
  console.log(recipes, "in use effect")
}, [])

  // JSON.stringify()
  return (
    <div>
        <RecipeCard recipe1={recipes[0]}/>
        {/* <p>{JSON.stringify(recipes[0])}</p> */}
    </div>
  )
}
