import './category.css'

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { RecipeCard } from '../RecipeCard/RecipeCard';


export const Category = () => {

  const { category } = useParams();

  let categoryParam = category.charAt(0).toUpperCase() + category.slice(1)

  const [categoryRecipes, setCategoryRecipes] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/api/v1/recipes/by-category/${categoryParam}`,
          {
            method: 'get',
          });
        let rez = await response.json();
        console.log(rez, "ќфром хомеј");
        setCategoryRecipes(rez);
        console.log(rez, "ќфром хомеј");
        return rez

      } catch (err) {
        console.log(err);
      }
    })();
  }, [category])

  return (
    <div className='home--wrapper'>
      <div className='home--centerWrapper'>
        <div className='home--title'>
          <h2>{category.charAt(0).toUpperCase() + category.slice(1)} </h2>
          <span className='home-theLine'></span>
        </div>
        <div className='home--cardsFresh'>
          {categoryRecipes.map((recipe,index) =>
            <RecipeCard key={index} recipe1={recipe} />
          )}
        </div>
      </div>
    </div>

  )
}