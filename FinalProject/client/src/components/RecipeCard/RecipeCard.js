import './recipeCard.css'
import { useState,useEffect } from 'react';
// import object from "../../mockFolder/mockRecipes.json"
import timeIco from "../../assets/icon_time.svg"
import plateIco from "../../assets/icon_plate.svg"
import favIco from "../../assets/icon_star.svg"
import arrowsIco from "../../assets/icon_arrows_white.svg"
import { useNavigate } from 'react-router-dom';

import {setOpenPortal} from '../../slices/isOpenSlice'
import { useDispatch, useSelector } from 'react-redux';
// const recipe1 = object[0];
{/* {JSON.stringify(recipe1)} */ }




export const RecipeCard = ( {id, recipe1, onArrow} ) => {

    const openPortal = useSelector( state => state.openPortal.openPortal);
    const dispatch = useDispatch();

    useEffect(() => {
    //   console.log(recipe1)
    //   console.log(recipe1?._id, "here in recipe card");
    
    }, [])

    const navigate = useNavigate();
    const navigateToRecipe = (param) => {
        navigate(`/recipe/${param}`);
    }
    
    const handleArrow = () => {
        console.log('this is arrow')
        onArrow(recipe1._id)
        // let bla = [recipe1];
        // localStorage.setItem('toDisplayRecipe',id);
        // console.log('toDisplayRecipe',JSON.stringify({recipe1}));
        dispatch(setOpenPortal(true));
    }
    

    return (
            <div key={id} id={id} className='card--wrapper'>
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
                    <div className='card--footerButton' onClick={ handleArrow}>
                        <img src={arrowsIco} alt="" onClick={ handleArrow} />
                    </div>
                </div>
            </div>
    )
}
