import React, { useEffect, useState } from 'react'
// import recipeAll from '../../mockFolder/mockRecipes.json'
import ReactDOM from 'react-dom/client';
import PortalReactDOM from 'react-dom'
import timeIco from "../../assets/icon_time.svg"
import plateIco from "../../assets/icon_plate.svg"
import favIco from "../../assets/icon_star.svg"
import Xclose from "../../assets/icon_close.svg"

import './oneRecipeCard.css'

// "author_id": "1",
// "title": "Recipe 1",
// "category": "Breakfast",
// "preparationTime": 45,
// "numPeople": 4,
// "dateCreated": "2022-03-25",
// "shortDesc": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.",
// "recipe": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years, comes from a line in section 1.10.32.",
// "imgLink": "link",
// "numberFavorited": "0"

// const recipe = recipeAll[0];

export const OneRecipeCard = ({ id,open,recipe, onClose}) => {

    // const [recipe,setRecipe] = useState([])

    // useEffect( () => {
    //     (async () => {
    //         try {
    //             const response = await fetch(`/api/v1/recipes/${id}`,
    //                 {
    //                     method: 'get',
    //                 });
    //             let rez = await response.json();
    //             console.log(rez, "from one recipe");
    //             setRecipe(rez);
    //             console.log(rez, "ќфром хомеј");
    //             return rez
    
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     })();
    // },[] )

    // let recipe = localStorage.getItem('toDisplayRecipe');
    // let recipe = recipe1;
    console.log('tjhis is tireooiertnoe;rwitrew',recipe)
    console.log('tjhis is iddidididididi',id)
    console.log(JSON.stringify(recipe))


    return PortalReactDOM.createPortal(
        <  >
            <div id={id} className='oneRecipeCard-overlay' />
            <div className='oneRecipeCard--overwrapper'>
                <div className='oneRecipeCard--wrapper'>
                    {/* <div className='oneRecipeCard-xbutton'>
                    </div> */}
                    <div className='oneRecipeCard--title'>
                        <h2>{recipe.title}</h2>
                        <div onClick={onClose}>

                            <img src={Xclose} alt="" />
                        </div>
                    </div>
                    <div className='oneRecipeCard--content'>
                        <div className='oneRecipeCard--leftContent'>
                            <div className='oneRecipeCard--img'>
                                <img src={recipe.imgLink} alt="imgHERE" />
                            </div>
                            <div className='oneRecipeCard--underImageText'>
                                <div className='oneRecipeCard--underImageTextTitles'>
                                    <p>Best Served For</p>
                                    <div className='oneRecipeCard--tag'>
                                        {recipe.category.toLocaleLowerCase()}
                                    </div>
                                </div>
                                <div className='oneRecipeCard--underImageTextDesc'>
                                    <p>{recipe.shortDesc}</p>
                                </div>
                                <div className='oneRecipeCard--footerIcons'>
                                    <img className='card--icon' src={timeIco} alt="" />
                                    <p className='card--info'>{recipe.preparationTime} min</p>
                                    <img className='card--icon' src={plateIco} alt="" />
                                    <p className='card--info'>{recipe.numPeople > 1 ? `${recipe.numPeople} persons` : `${recipe.numPeople} person`}</p>
                                    <img className='card--icon' src={favIco} alt="" />
                                    <p className='card--info'>{recipe.numberFavorited}</p>
                                </div>
                            </div>

                        </div>
                        <div className='oneRecipeCard--rightContent'>
                            <p className='recipeDetailsTitle'>Recipe Details</p>
                            <p className='recipeDetailsDetailed'>{recipe.recipe}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById("portal")
    )
}
