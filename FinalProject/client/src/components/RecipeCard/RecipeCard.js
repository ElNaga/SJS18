import './recipeCard.css'
import { useState,useEffect } from 'react';
// import object from "../../mockFolder/mockRecipes.json"
import timeIco from "../../assets/icon_time.svg"
import plateIco from "../../assets/icon_plate.svg"
import favIco from "../../assets/icon_star.svg"
import arrowsIco from "../../assets/icon_arrows_white.svg"
// const recipe1 = object[0];
{/* {JSON.stringify(recipe1)} */ }

export const RecipeCard = ( {recipe1} ) => {

    useEffect(() => {
      console.log(recipe1)
      console.log(recipe1?._id, "here in recipe card");
    
    }, [])
    

    return (
        <>
            {/* <p>{JSON.stringify(recipe1)}</p> */}
            {/* <p>{(JSON.stringify(recipe1))}</p> */}
            <div className='card--wrapper'>
                <div className='card--imgAndCategory'>
                    <div className='card--tag'>
                        {recipe1.category.toLocaleLowerCase()}
                    </div>
                    <div className='card--ImgDiv'>
                        <img className='card--img' src={recipe1.imgLink} alt="" />
                    </div>
                </div>
                <div className='card--recipeInfo'>
                    <label className="card--title" htmlFor="card--recipeInfoPara">{recipe1.title}</label>
                    <p id='card--recipeInfoPara'>{recipe1.shortDesc}</p>
                </div>
                <div className='card--footer'>
                    <div className='card--footerIcons'>
                        <img className='card--icon' src={timeIco} alt="" />
                        <p className='card--info'>{recipe1.preparationTime} min</p>
                        <img className='card--icon' src={plateIco} alt="" />
                        <p className='card--info'>{recipe1.numPeople > 1 ? `${recipe1.numPeople} persons` : `${recipe1.numPeople} person`}</p>
                        <img className='card--icon' src={favIco} alt="" />
                        <p className='card--info'>{recipe1.numberFavorited}</p>
                    </div>
                    <div className='card--footerButton'>
                        <img src={arrowsIco} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
