import './recipeCard.css'

import object from "../../mockFolder/mockRecipes.json"
const recipe1 = object[0];
{/* {JSON.stringify(recipe1)} */}

export const RecipeCard = () => {
  return (
    <div className='card--wrapper'>
        <div>
            <div className='card--tag'>
                {recipe1.category.toLocaleLowerCase()}
            </div>
            <img className='card--img' src={recipe1.imgLink} alt="" />
        </div>
        <div className='card--recipeInfo'>
            <label htmlFor="card--recipeInfoPara">{recipe1.title}</label>
            <p id='card--recipeInfoPara'>{recipe1.shortDesc}</p>
        </div>
        <div className='card--footer'>
            <div className='card--footerIcons'>
                <img className='card--icon' src="" alt="" />
                <p className='card--info'>{recipe1.preparationTime} min</p>
                <img className='card--icon' src="" alt="" />
                <p className='card--info'>{recipe1.numPeople}</p>
                <img className='card--icon' src="" alt="" />
                <p className='card--info'>{recipe1.numberFavorited}</p>
            </div>
            <div className='card--footerButton'>
                <img src="" alt="" />
            </div>
        </div>
    </div>
  )
}
