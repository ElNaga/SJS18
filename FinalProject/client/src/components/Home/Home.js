import './Home.css'
import { RecipeCard } from "../RecipeCard/RecipeCard";
import { useState, useEffect } from 'react';

export const Home = () => {

    // console.log((localStorage.getItem('token')))

    let [freshRecipes, setFreshRecipes] = useState([]);
    let [popularRecipes, setPopularRecipes] = useState([]);


    useEffect( () => {
        (async () => {
            try {
                const response = await fetch('/api/v1/recipes',
                    {
                        method: 'get',
                    });
                let rez = await response.json();
                console.log(rez, "ќфром хомеј");
                setFreshRecipes(rez.slice(0,3));
                console.log(rez, "ќфром хомеј");
                return rez
    
            } catch (err) {
                console.log(err);
            }
        })();
        (async () => {
            try {
                const response = await fetch('/api/v1/recipes/popular',
                    {
                        method: 'get',
                    });
                let rez = await response.json();
                setPopularRecipes(rez);
                console.log(rez, "popular хомеј");
                return rez
    
            } catch (err) {
                console.log(err);
            }
        })();
    },[] )

    // let freshRecipes = [];
    // JSON.stringify()
    return (
        <div className='home--wrapper'>
            <div className='home--centerWrapper'>
                <div className='home--title'>
                    <h2>Fresh & New </h2>
                    <span className='home-theLine'></span>
                </div>
                <div className='home--cardsFresh'>
                    {freshRecipes.map((recipe) =>
                        <RecipeCard recipe1={recipe} />
                    )}
                </div>
                <div className='home--title'>
                    <h2>Most Popular Recipes </h2>
                    <span className='home-theLine'></span>
                </div>
                <div className='home--cardsPopular'>
                    {popularRecipes.map((recipe) =>
                        <RecipeCard style={{border: '30px solid red'}} recipe1={recipe} />
                    )}
                </div>

            </div>
            {/* <p>{JSON.stringify(recipes[0])}</p> */}
        </div>
    )
}
