import './Home.css'
import { RecipeCard } from "../RecipeCard/RecipeCard";
import { useState, useEffect } from 'react';

export const Home = () => {

    // console.log((localStorage.getItem('token')))

    let [recipes, setRecipes] = useState([]);


    useEffect( () => {
        (async () => {
            try {
                const response = await fetch('/api/v1/recipes',
                    {
                        method: 'get',
                    });
                let rez = await response.json();
                console.log(rez, "ќфром хомеј");
                setRecipes(rez);
                console.log(rez, "ќфром хомеј");
                return rez
    
            } catch (err) {
                console.log(err);
            }
        })();
    },[] )

    let rece = recipes[0];
    // JSON.stringify()
    return (
        <div className='home--wrapper'>
            <div className='home--centerWrapper'>
                <div className='home--title'>
                    <h2>Fresh & New </h2>
                    <span className='home-theLine'></span>
                </div>
                <div className='home--cardsFresh'>
                    {recipes.map((recipe) =>
                        <RecipeCard recipe1={recipe} />
                    )}
                </div>
                <div className='home--title'>
                    <h2>Most Popular Recipes </h2>
                    <span className='home-theLine'></span>
                </div>
                <div className='home--cardsPopular'>
                    {recipes.map((recipe) =>
                        <RecipeCard recipe1={recipe} />
                    )}
                </div>

            </div>
            {/* <p>{JSON.stringify(recipes[0])}</p> */}
        </div>
    )
}
